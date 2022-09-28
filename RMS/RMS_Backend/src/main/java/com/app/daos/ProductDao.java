package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Products;

public interface ProductDao extends JpaRepository<Products,Integer >{
	
	Products findByProductId(int productId);
	
	//@Query(value = "select * from product p where p.category_id=? ", nativeQuery = true)
	 List<Products> findByCategory_id(int categoryId);
	 
	 @Modifying
	@Query("UPDATE Products p SET p.productStatus = ?2 WHERE p.productId = ?1")
	int updateProductStatus(int id, int status);

	 
}
