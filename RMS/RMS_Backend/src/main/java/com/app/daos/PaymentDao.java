package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Payment;

public interface PaymentDao extends JpaRepository<Payment, Integer> {

//	@Query(value = "select * from payment p where p.orderId = ?1", nativeQuery = true)
//	Payment findByOrderId(int orderId);
//	
	
	@Query(value = "select * from payment p where Date(p.paymentDateTime) = (select date(now()));", nativeQuery = true)
	List<Payment> findTotalPaymentsOfTodays();
	
	
	@Query(value = "select * from payment p where Date(p.paymentDateTime) between (SELECT ADDDATE(date(now()), INTERVAL -7 DAY)) and (select date(now())) ;", nativeQuery = true)
	List<Payment> findTotalPaymentsOfWeek();
	
	@Query(value = "select * from payment where year(paymentDateTime) =(select year(now()));", nativeQuery = true)
	List<Payment> getTotalSaleOfCurrentYear();
	
	@Query(value = "select * from payment ;", nativeQuery = true)
	List<Payment> getTotalSales();
	
	@Query(value = "select * from payment where date(paymentDateTime) =(select subdate( date(now()), INTERVAL 1 DAY));", nativeQuery = true)
	List<Payment> getTotalSaleOfYesterday();
	
	
	//select * from payment p where Date(p.paymentDateTime) = (select date(now()));
}
