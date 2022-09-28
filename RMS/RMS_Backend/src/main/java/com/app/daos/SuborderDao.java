package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.SuborderDetails;

public interface SuborderDao extends JpaRepository<SuborderDetails, Integer> {

	
	@Query(value = "Select * from suborderDetails s where s.orderId = ?1", nativeQuery = true)
	//List<SuborderDetails> findByOrders(Orders order);
	List<SuborderDetails> findByOrderId(long orderId);
	
	//SuborderDetails findBySuborderId(int suborderId);

	@Modifying
	@Query("UPDATE SuborderDetails s SET s.suborderStatus = ?2 WHERE s.suborderId = ?1")
	int updateSuborderStatus(int id, int suborderStatus);

	
}
