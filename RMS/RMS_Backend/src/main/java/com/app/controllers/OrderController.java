package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.OrderDetailsDto;
import com.app.dtos.Response;
import com.app.entities.Employee;
import com.app.entities.Orders;
import com.app.entities.Payment;
import com.app.entities.SuborderDetails;
import com.app.services.OrderManagementService;

@RestController
@CrossOrigin(origins="*")
public class OrderController {

	@Autowired
	private OrderManagementService orderService;
	
	//get order by table id
	@GetMapping("/order/{tableId}")
	public ResponseEntity<?> getOrderByTableId(@PathVariable("tableId") int id){
		Orders order = orderService.getOrderdetailsOfTable(id);
		if(order == null)
			return Response.error("No order linked to this ID");
		return Response.success(order);
	}
	
	//add new order 
	@PostMapping("/order/{tableId}/add")
	public ResponseEntity<?> takeNewOrder(@PathVariable int tableId){
		 Orders order= orderService.takeNewOrder(tableId);
		if(order == null)
			return Response.error("Table is already occupied");
		return Response.success(order);
	}
		
	//take new order details
//	@PostMapping("/order/{orderId}")
//	public ResponseEntity<?> takeOrderDetails(@PathVariable("orderId") int id, @RequestBody OrderDetailsDto orderDetailsDto){
//		SuborderDetails subOrder = orderService.takeOrder(id, orderDetailsDto);
//		if(subOrder == null)
//			return Response.error("No user linked to this ID");
//		return Response.success(subOrder);
//	}
	
	//take new order details
//	@PostMapping("/order")
//	public ResponseEntity<?> takeOrderDetails( @RequestBody OrderDetailsDto orderDetailsDto){
//		SuborderDetails subOrder = orderService.takeOrder((int) orderDetailsDto.getOrderId(),orderDetailsDto);
//		if(subOrder == null)
//			return Response.error("No user linked to this ID");
//		return Response.success(subOrder);
//	}
	
	
	
	
	//take new order details
	@PostMapping("/order/{tableId}/table")
	public ResponseEntity<?> takeOrderDetailsOnTable(@PathVariable("tableId") int id, @RequestBody OrderDetailsDto orderDetailsDto){
		SuborderDetails subOrder = orderService.takeOrderOnTable(id, orderDetailsDto);
		if(subOrder == null)
			return Response.error("No user linked to this ID");
		return Response.success(subOrder);
	}
		
	//get order details of given order
	@GetMapping("/order/active")
	public ResponseEntity<?> getAllActiveOrderDetails(){
		List<Orders> OrderList = orderService.getAllUnpaidOrderor();
		if(OrderList == null)
			return Response.error("No order linked to this ID");
		return Response.success(OrderList);
	}
	
	
	//get unpaid unprocessed(by chef) orders 
	@GetMapping("/order/active/unprocessed")
	public ResponseEntity<?> getAllActiveUnprocessedOrderDetails(){
		List<SuborderDetails> OrderList = orderService.getAllActiveUnprocessedOrderDetails();
		if(OrderList == null)
			return Response.error("No order linked to this ID");
		return Response.success(OrderList);
	}
	
	
	//get order details of given order
	@GetMapping("/order/{orderId}/details")
	public ResponseEntity<?> getOrderDetailsByOrderId(@PathVariable int orderId){
		List<SuborderDetails> orderDetailsList = orderService.getOrderDetailsByOrderId(orderId);
		if(orderDetailsList == null)
			return Response.error("No order linked to this ID");
		return Response.success(orderDetailsList);
	}
	
	
	//get order details of given order On given table
	@GetMapping("/order/{tableId}/detailsontable")
	public ResponseEntity<?> getOrderDetailsByTableId(@PathVariable int tableId){
		List<SuborderDetails> orderDetailsList = orderService.getOrderDetailsByTableId(tableId);
		if(orderDetailsList == null)
			return Response.error("No order available on the table");
		return Response.success(orderDetailsList);
	}
	
	//update quantity of subOrderDetails
	@PutMapping("/order/{suborderId}/updateqty")
	public ResponseEntity<?> updateSuborderQuantity(@PathVariable int suborderId,  @RequestBody OrderDetailsDto orderDetailsDto){
		SuborderDetails suborder = orderService.updateSuborderQuantity(suborderId,orderDetailsDto.getProductQuantity());
		if(suborder == null)
			return Response.error("suborder is not available");
		return Response.success(suborder);
	}
	
	//delete OrderDetails
	@DeleteMapping("/order/{suborderId}")
	public ResponseEntity<?> deleteSuborder(@PathVariable int suborderId)
	{
		int count = orderService.deleteSuborderService(suborderId);
		if(count == 0)
			return Response.error("Deleted failed");
		return Response.success("Deleted successfully");
	}
	
	
	//inActive/Active product
	@PutMapping("/order/{suborderId}/complete")
	public ResponseEntity<?> ChangeSuborderCompletionStatus(@PathVariable int suborderId){
		
		int count = orderService.toggleProductActiveStatus(suborderId);
		if(count != 1)
			return Response.error("No suborder status updated");
		return Response.success("order completed");
		}
	
	
//	//update order details
//	@GetMapping("/order/{tableId}")
//	public ResponseEntity<?> deleteSuborder(@PathVariable("tableId") int id){
//		Orders order = orderService.getOrderdetailsOfTable(id);
//		if(order == null)
//			return Response.error("No order linked to this ID");
//		return Response.success(order);
//	}
}
