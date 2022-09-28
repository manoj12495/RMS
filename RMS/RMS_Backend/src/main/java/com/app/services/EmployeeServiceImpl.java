package com.app.services;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.IEmployeeDao;
import com.app.dtos.Credentials;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.EmployeeDetailsDto;
import com.app.dtos.EmployeeDto;
import com.app.entities.Employee;
import org.springframework.security.crypto.password.PasswordEncoder;

@Transactional
@Service
public class EmployeeServiceImpl {

	@Autowired
	private IEmployeeDao employeeDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private DtoEntityConverter converter;
	
	public Employee findEmployeeById(int id)
	{
		return  employeeDao.findByEmpId(id);
		
	}
	
	
	public Employee findUserFromdbByEmail(String email) {
		Employee user = employeeDao.findByemail(email);
	    return user;
	}
	
	
	
	public EmployeeDto findEmployeeByEmail(String email)
	{
		Employee employee = employeeDao.findByemail(email);
		return converter.toEmpDto(employee);
	}
	
	//Login user
//	public EmployeeDto findEmployeeByEmailAndPassword(Credentials cred)
//	{
//		Employee dbUser = employeeDao.findByemail(cred.getEmail());
//		String rawPassword = cred.getPassword();
//		if(dbUser != null && passwordEncoder.matches(rawPassword, dbUser.getPassword()) && dbUser.getIsActive() == 1) {
//			EmployeeDto result = converter.toEmpDto(dbUser);
//			return result;
//		}
//		return null;
//	}
	
	public EmployeeDto findEmployeeByEmailAndPassword(Credentials cred)
	{
		Employee dbUser = employeeDao.findByemail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if(dbUser != null && rawPassword.equals(dbUser.getPassword()) && dbUser.getIsActive() == 1) {
			EmployeeDto result = converter.toEmpDto(dbUser);
			return result;
		}
		return null;
	}

	
	
	
	
	
	//get all Employee dateils
	public List<Employee> findAllEmployees()
	{
		List<Employee> empList = employeeDao.findAll();
		return empList;
	}
	
	//add employee 0r update employee
//	public Employee addEmployee(Employee employee)
//	{    String password = employee.getPassword();
//	     String encPassword = passwordEncoder.encode(password);
//	     employee.setPassword(encPassword);
//		employee.setJoiningDate(new Date());
//		employee.setIsActive(1);
//		return employeeDao.save(employee);
//	}
	
	
	//add employee 0r update employee
		public Employee addEmployee(Employee employee)
		{
			employee.setJoiningDate(new Date());
			employee.setIsActive(1);
			return employeeDao.save(employee);
		}

	
	// Update employee details
	public Employee updateEmployeeDetails(EmployeeDetailsDto empDetails, int id) {
		Employee emp = employeeDao.findByEmpId(id); //current
		
		emp = converter.toEmpEntity(empDetails, emp); //updated curr
		return employeeDao.save(emp); //save to db
		
	}
	
	//update employee status
	public Employee updateEmployeeActiveStatus(int id) {
		Employee emp = employeeDao.findByEmpId(id); 
		emp.setIsActive(0); 
		return employeeDao.save(emp);
	}
	
	//delete employee status
	public int 	deleteEmployeeDetails(int id) {
	
	Employee emp=employeeDao.findByEmpId(id);
	if(emp!=null) {
		employeeDao.deleteById(id);
		return 1;
	}else {
		return 0;
	}
	}
	
//	
//	//update employee status
//	public Employee updateEmpStatus(int id, byte status) {
//		Employee emp = employeeDao.findByEmpId(id);
//		emp.setIsActive(status);
//		return employeeDao.save(emp);
//	}
//	
//	//update employee role
//		public Employee updateEmpRole(int id, String role) {
//			Employee emp = employeeDao.findByEmpId(id);
//			emp.setRole(role);
//			return employeeDao.save(emp);
//		}

	
}
