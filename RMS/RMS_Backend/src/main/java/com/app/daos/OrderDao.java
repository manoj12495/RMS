package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Orders;
import com.app.entities.Products;
import com.app.entities.SuborderDetails;

public interface OrderDao extends JpaRepository<Orders, Integer>{

	@Query(value = "select * from orders o where o.tableId = ? ", nativeQuery = true) //for mysql query
	//@Query("select * from Orders o where o.table = ? ")
	List<Orders> findOrdersByTableId(int tableId);
	 
	List<SuborderDetails> findSuborderByOrderId(int orderId);
	
	Orders findByOrderId(long orderId);
	
}
