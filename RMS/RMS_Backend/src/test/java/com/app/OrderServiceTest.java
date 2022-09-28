//package com.app;
//
//import java.util.List;
//
//import javax.transaction.Transactional;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.annotation.Rollback;
//
//import com.app.daos.IEmployeeDao;
//import com.app.entities.Employee;
//import com.app.entities.SuborderDetails;
//import com.app.services.OrderManagementService;
//import com.app.services.PaymentService;
//
//@SpringBootTest
//class OrderServiceTest {
//
//	@Autowired
//	private OrderManagementService orderSer;
//	
//	private PaymentService paymentSer;

//	@Test
//	void getOrderDetails() {
//		int id = 2;
//		List<SuborderDetails> suborderList = orderSer.getOrderDetailsByOrderId(id);
//		
//		suborderList.forEach(System.out::println);
//	}
	
	
//	@Test
//	void getTotalAmount()
//	{
//		int id = 2;
//		orderSer.updateGrossAmount(2);
//	}
	
//	@Test
//	void getTodaysSaleAmount()
//	{
//		System.out.println( paymentSer.getTodaysTotalSale());		
//	}
	

//}
