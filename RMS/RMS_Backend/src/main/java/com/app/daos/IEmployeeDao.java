package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Employee;


public interface IEmployeeDao extends JpaRepository<Employee, Integer>{

	Employee findByEmpId(int empId);
	Employee findByemail(String email);
	
	@Modifying
	@Query("UPDATE Employee e SET e.isActive = ?2 WHERE e.id = ?1")
	int updateEmpStatus(int id, int status);

	@Modifying
	  @Query("UPDATE Employee u SET u.password=?1  WHERE u.empId=?2")
	  public void updateUserPassword(String password,int id);
	
	
	
	
//	@Modifying
//	@Query("UPDATE Employee e SET e.role = ?2 WHERE e.id = ?1")
//	int updateEmpRole(int id, Role role);


	
	
//	@Modifying
//	@Query("Update table emp_tb set  ")
//	int UpdateEmpDetails(int id, EmployeeStatus status);
//		
	
	
}
