package com.app.services;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.OrderDao;
import com.app.daos.PaymentDao;
import com.app.dtos.PaymentDto;
import com.app.entities.Orders;
import com.app.entities.Payment;

@Service
@Transactional
public class PaymentService {

	@Autowired
	private PaymentDao paymentDao;

	@Autowired
	private OrderManagementService orderService;

	@Autowired
	private OrderDao orderDao;
	
	@Autowired
	private TableInfoService tableSer;

	
	
	public Payment addNewPayment(long orderId, String paymentType) {

		double taxPercentage = 0.18; // 18 % tax hardcoaded
		Payment payment = new Payment();
		double grossAmount = orderService.updateGrossAmount(orderId);
		if (grossAmount != 0.0) {
			payment.setNetPaymentAmount(grossAmount + grossAmount * taxPercentage );
			payment.setPaymentType(paymentType);
			payment.setPaymentStatus(1);
			return paymentDao.save(payment);
		}

		return null;
	}

	// make payment
	public Map<String, Object> makePayment(long orderId, PaymentDto paymentDto) {
		
		//check if already payment id done
		Orders order = orderDao.findByOrderId(orderId);
		
		if(order.getOrderStatus() != 1 )
		{
			// update gross order amount
			// add details of payment to db
			Payment payment = addNewPayment(orderId, paymentDto.getPaymentType()) ;
			if(payment != null)
			{
				// update order stauts to 1 = completed/payment id done

				order.setOrderStatus(1);
				order.setPayment(payment);
				orderDao.save(order);
				
				// update table status to 0 = unoccupied
				tableSer.makeTableUnoccupied(paymentDto.getTableId());
				return Collections.singletonMap("payment is successfull ", payment);		
			}
			return Collections.singletonMap("Failed to make payment", null);

		}
		

		return Collections.singletonMap("Payment is already done", 1); //payment failed
	}

	
	
	// make payment On the table
	public Map<String, Object> makePaymentOnTable( PaymentDto paymentDto) {
		
		
		//check if already payment id done//check if already payment id done
		 Orders order = orderService.getOrderdetailsOfTable(paymentDto.getTableId());
		
		
		
		if(order.getOrderStatus() != 1 )
		{
			// update gross order amount
			// add details of payment to db
			Payment payment = addNewPayment(order.getOrderId(), paymentDto.getPaymentType()) ;
			if(payment != null)
			{
				// update order stauts to 1 = completed/payment id done

				order.setOrderStatus(1);
				order.setPayment(payment);
				orderDao.save(order);
				
				// update table status to 0 = unoccupied
				tableSer.makeTableUnoccupied(paymentDto.getTableId());
				return Collections.singletonMap("payment is successfull ", payment);		
			}
			return Collections.singletonMap("Failed to make payment", null);

		}
		

		return Collections.singletonMap("Payment is already done", 1); //payment failed
	}
	
	
	
	//get todays revenue
	public Map<String, Object> getTodaysTotalSale() {
		List<Payment> payment = paymentDao.findTotalPaymentsOfTodays();
		double amt =  payment.stream()
				.map(amount -> amount.getNetPaymentAmount() )
				.mapToDouble(x -> x).sum();	
		return Collections.singletonMap("amount", amt);
		
	}
	
	//get todays revenue
	public double getTotalSaleOfWeek() {
		List<Payment> payment = paymentDao.findTotalPaymentsOfWeek();
		return payment.stream()
				.map(amount -> amount.getNetPaymentAmount() )
				.mapToDouble(x -> x).sum();			
		
	}
	
	//get todays revenue
	public double getTotalSaleOfCurrentYear() {
		List<Payment> payment = paymentDao.getTotalSaleOfCurrentYear();
		return payment.stream()
				.map(amount -> amount.getNetPaymentAmount() )
				.mapToDouble(x -> x).sum();			
		
	}
	
	
	public double getTotalSales() {
		List<Payment> payment = paymentDao.getTotalSales();
		return payment.stream()
				.map(amount -> amount.getNetPaymentAmount() )
				.mapToDouble(x -> x).sum();			
		
	}
	
	//get yesterday evenue
	
	public double getTotalSaleOfYesterday() {
		List<Payment> payment = paymentDao.getTotalSaleOfYesterday();
		return payment.stream()
				.map(amount -> amount.getNetPaymentAmount() )
				.mapToDouble(x -> x).sum();			
		
	}
	

}
