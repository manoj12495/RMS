package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Category;

public interface CategoryDao extends JpaRepository<Category,Integer >{
	
	Category findById(int categoryId);
	
	 @Modifying
	@Query("UPDATE Category c SET c.categoryStatus = ?2 WHERE c.id = ?1")
	int updateCategoryStatus(int id, int status);

	
}
