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
//import com.app.daos.OrderDao;
//import com.app.daos.PaymentDao;
//import com.app.entities.Employee;
//import com.app.entities.Orders;
//
//@SpringBootTest
//class EmployeeDaoTest {
//
//	@Autowired
//	private IEmployeeDao empDao;
//	
//	@Autowired
//	private OrderDao orderDao;
//	
//	@Autowired 
//	private PaymentDao paymentDao;
//	
//	@Test
//	void loginEmployee() {
//		Employee emp = empDao.findByEmpId(1);
//		System.out.println(emp);
//	}
//	
//	@Test
//	void getAllEmployees() {
//		List<Employee> empList = empDao.findAll();
//		
//		empList.forEach(System.out::println);
//	}
//	
//	@Transactional()
//	@Test
//	@Rollback(false)
//	void UpdateEmployeeStatus() {
//		Employee emp = empDao.findByEmpId(2);
//		byte status = 0;
//		int res = empDao.updateEmpStatus(emp.getEmpId(), status);
//		System.out.println(res);
//		System.out.println(emp.getName());
//	}
//	
//	@Test
//	void findPaymentByOrderId() {
//		int id = 2;
//		Orders order = orderDao.findByOrderId(id);
//		
//		System.out.println(order);
//		
//		//empList.forEach(System.out::println);
//	}
//	
////	@Test
////	void getPaymentDetailsByPrderId() {
////		int orderId = 2;
////		Payment payment = paymentDao.findByOrderId(orderId);
////		
////		System.out.println(payment);
////	}
//
//}
