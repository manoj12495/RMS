package com.app.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.aspectj.weaver.reflect.IReflectionWorld;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.OrderDao;
import com.app.daos.ProductDao;
import com.app.daos.SuborderDao;
import com.app.daos.TableInfoDao;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.OrderDetailsDto;
import com.app.dtos.ProductDto;
import com.app.entities.Orders;
import com.app.entities.Products;
import com.app.entities.SuborderDetails;
import com.app.entities.TableInfo;

@Service
@Transactional
public class OrderManagementService {

	@Autowired
	private OrderDao orderDao;

	@Autowired
	private TableInfoDao tableDao;

	@Autowired
	private SuborderDao suborderDao;

	@Autowired
	private ProductDao productDao;

	@Autowired
	private DtoEntityConverter converter;

	// return current Active order details or add new order to the table table
	public Orders getOrderdetailsOfTable(int tableId) {
		
		if(isTableaccupied(tableId)) {
			List<Orders> orderList = orderDao.findOrdersByTableId(tableId);
			
					if (orderList == null || orderList.get(0) == null) {
						return null;
					} else if (orderList.size() > 0) {
						orderList = orderList.stream()
								.filter(order -> order.getOrderStatus() == 0) // unpaid
								.collect(Collectors.toList());
			
						if (orderList != null)
							return orderList.get(0);
					}
		}
		

		return null;
	}

	// get table status
	public boolean isTableaccupied(int tableId) {
		TableInfo table = tableDao.findByTableId(tableId);
		if (table.getTableStatus() == 0)
			return false;

		return true;
	}

	// add new order
	public Orders takeNewOrder(int tableId) {

		Orders order = new Orders();
		// check wether table is occupied or not

		if (!isTableaccupied(tableId)) { // table is unoccupied

			TableInfo table = tableDao.findByTableId(tableId);

			order.setTable(table);

			// mark table as occupied
			table.setTableStatus(1);
			// save to db
			return orderDao.save(order);
		}
		return null;
	}

	// take order items -- order details --suborder
	public SuborderDetails takeOrder(int orderId, OrderDetailsDto orderDetailsDto) {
		
		if (!isTableaccupied(orderDetailsDto.getTableId())) {
			Orders order = new Orders();
			TableInfo table = tableDao.findByTableId(orderDetailsDto.getTableId());

			order.setTable(table);

			// mark table as occupied
			table.setTableStatus(1);
			// save to db
			orderDao.save(order);
			orderDetailsDto.setOrderId(order.getOrderId());
		}
		
		
		Products product = productDao.getById(orderDetailsDto.getProductId());
		orderDetailsDto.setProductRate(product.getPrice());
		orderDetailsDto.setProductName(product.getProductName());

		SuborderDetails suborderDetails = converter.toSuborderEntity(orderDetailsDto);
		return suborderDao.save(suborderDetails);
	}
	
	public List <Orders> getAllUnpaidOrderor()
	{
		
		return orderDao.findAll().stream()
		.filter(order -> order.getOrderStatus() == 0)
		.collect(Collectors.toList());
		
		
	}
	
//	public boolean getActiveSuborders(Orders order)
//	{
//		 List<SuborderDetails> suborder = order.getSuborder();
//		return 1;
//	}
	
	public List <SuborderDetails> getAllActiveUnprocessedOrderDetails()
	{
		
//		return orderDao.findAll().stream()
//		.filter(order -> order.getOrderStatus() == 0)
//		.filter(order -> getActiveSuborders(order))
//		.collect(Collectors.toList());
		
		return suborderDao.findAll().stream()
				.filter(suborder -> suborder.getSuborderStatus() == 0)
				.collect(Collectors.toList());
				
		
		
	}
	
	// take order items -- order details --suborder
		public SuborderDetails takeOrderOnTable(int tableId, OrderDetailsDto orderDetailsDto) {
			
		//if (!isTableaccupied(orderDetailsDto.getTableId())) {
		if (!isTableaccupied(tableId)) {
			Orders order = new Orders();
			TableInfo table = tableDao.findByTableId(tableId);

			order.setTable(table);

			//order.setOrderDateTime(LocalDateTime.now());
			// mark table as occupied
			table.setTableStatus(1);
			// save to db
			orderDao.save(order);
			tableDao.save(table);
			//getOrderdetailsOfTable(tableId);
			orderDetailsDto.setOrderId(order.getOrderId());
		}
		else {
			Orders order = getOrderdetailsOfTable(tableId);
			orderDetailsDto.setOrderId(order.getOrderId());
		}
		
		Products product = productDao.getById(orderDetailsDto.getProductId());
		orderDetailsDto.setProductRate(product.getPrice());
		orderDetailsDto.setProductName(product.getProductName());

		SuborderDetails suborderDetails = converter.toSuborderEntity(orderDetailsDto);
		return suborderDao.save(suborderDetails);
	}

	
	

	// get all order items
	public List<SuborderDetails> getOrderDetailsByOrderId(long orderId) {

		// return orderDao.findSuborderByOrderId(orderId);
		// Orders order = orderDao.findById(orderId).orElse(null);

		return suborderDao.findByOrderId(orderId);
		// return null;
	}
	
	// get all order items by tableId
	public List<SuborderDetails> getOrderDetailsByTableId(int tableId) {

		// return orderDao.findSuborderByOrderId(orderId);
		// Orders order = orderDao.findById(orderId).orElse(null);

		Orders order =  getOrderdetailsOfTable(tableId);
		if(order != null)
		{
			return suborderDao.findByOrderId(order.getOrderId());
		}
		return null;
		// return null;
	}

	

	// update quantity
	public SuborderDetails updateSuborderQuantity(int suborderId, int quantity) {
		SuborderDetails suborder = suborderDao.findById(suborderId).orElse(null);
		if (suborder != null) {
			suborder.setProductQuantity(quantity);
			return suborderDao.save(suborder);
		}
		return null;
	}

	// delete suborder
	public int deleteSuborderService(int subOrderId) {
		SuborderDetails suborderDetails = suborderDao.findById(subOrderId).orElse(null);
		if (suborderDetails != null) {
			suborderDao.deleteById(subOrderId);
			return 1;
		}
		return 0;

	}
	
	//update gross amount
	public double updateGrossAmount(long orderId){
		List<SuborderDetails> list = getOrderDetailsByOrderId(orderId);
		if(list == null || list.get(0) == null)
		{
			return 0.0;
		}
		double sum = list.stream()
		.map(sub -> converter.calculeteAmount(sub))		
		.mapToDouble(x -> x).sum();
		
		Orders order = orderDao.findByOrderId(orderId);
		order.setGrossAmount(sum);
		
		orderDao.save(order);
		return sum;
	}
	

	//toggle product active status
	public int toggleProductActiveStatus(int suborderId)
	{
		 //SuborderDetails menu = suborderDao.findBySuborderId(suborderId);
		int status = 1;
		return suborderDao.updateSuborderStatus(suborderId, status);
			
			 
	}

	
}
