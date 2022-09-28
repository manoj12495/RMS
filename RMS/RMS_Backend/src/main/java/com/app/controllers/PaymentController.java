package com.app.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.PaymentDto;
import com.app.dtos.Response;
import com.app.services.PaymentService;

@RestController
@CrossOrigin
public class PaymentController {

	@Autowired
	private PaymentService paymentSer;
	
	@PostMapping("/payment/{orderId}")
	public ResponseEntity<?> makePayment(@PathVariable long orderId , @RequestBody PaymentDto paymentDto)
	{
		Map<String, Object> payment = paymentSer.makePayment(orderId, paymentDto);
		if(payment == null)
			return Response.error("failed to make payment");
		return Response.success(payment);
	}
	
	//make payment by tableId
	@PostMapping("/payment/makePayment")
	public ResponseEntity<?> makePaymentOnTheTable( @RequestBody PaymentDto paymentDto)
	{
		Map<String, Object> payment = paymentSer.makePaymentOnTable(paymentDto);
		if(payment == null)
			return Response.error("failed to make payment");
		return Response.success(payment);
	}
	
	
	
	//get todays total sales
	@GetMapping("/sale/todays")
	public ResponseEntity<?> getTodaysSale()
	{
		 Map<String, Object> amount = paymentSer.getTodaysTotalSale();
		if(amount == null)
			return Response.error("failed to load amount");
		return Response.success(amount);
	}
	
	//get total sale of this week
	@GetMapping("/sale/weeks")
	public ResponseEntity<?> getTotalSaleOfWeek()
	{
		Double amount = paymentSer.getTotalSaleOfWeek();
		if(amount == null)
			return Response.error("failed to load amount");
		return Response.success(amount);
	}
	
	
	//get total sale of this week
	@GetMapping("/sale/year")
	public ResponseEntity<?> getTotalSaleOfCurrentYear()
	{
		Double amount = paymentSer.getTotalSaleOfCurrentYear();
		if(amount == null)
			return Response.error("failed to load amount");
		return Response.success(amount);
	}
	
	
	
	@GetMapping("/sale/alltime")
	public ResponseEntity<?> getTotalSaleOfAllTime()
	{
		Double amount = paymentSer.getTotalSales();
		if(amount == null)
			return Response.error("failed to load amount");
		return Response.success(amount);
	}
	
	
	
	
	
	
	
	//get total sale of yesterday
	@GetMapping("/sale/yesterday")
	public ResponseEntity<?> getTotalSaleOfYesterday()
	{
		Double amount = paymentSer.getTotalSaleOfYesterday();
		if(amount == null)
			return Response.error("failed to load amount");
		return Response.success(amount);
	}
	
	
	//get payment after pyment
//	@GetMapping("/payment/todays")
//	public ResponseEntity<?> getOrder()
//	{
//		Double amount = paymentSer.getTodaysTotalSale();
//		if(amount == null)
//			return Response.error("failed to load amount");
//		return Response.success(amount);
//	}
	
}
