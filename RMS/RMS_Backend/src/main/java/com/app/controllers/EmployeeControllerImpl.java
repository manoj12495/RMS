package com.app.controllers;

import java.util.List;
import java.util.Random;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.daos.IEmployeeDao;
import com.app.dtos.Credentials;
import com.app.dtos.EmployeeDetailsDto;
import com.app.dtos.EmployeeDto;
import com.app.dtos.Response;
import com.app.entities.Employee;
import com.app.services.EmailSenderServiceImpl;
import com.app.services.EmployeeServiceImpl;

@CrossOrigin
@RestController
public class EmployeeControllerImpl {
	
	@Autowired
	private EmployeeServiceImpl empService;

	@Autowired
	private IEmployeeDao empDao; 
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private EmailSenderServiceImpl emailSenderService;
	
	private int randomNumber;
	
	@PostMapping("/forgotPasswordinit")
	public ResponseEntity<?> forgotPassword( @RequestBody Credentials cred) throws MessagingException {
		
		Employee user = empService.findUserFromdbByEmail(cred.getEmail());
		
		Random random = new Random();   
		
		randomNumber = random.nextInt(10000);  
		
		
		System.out.println("random number: "+randomNumber);
		
		if (user == null)
			return Response.error("user not found");
		
	emailSenderService.sendSimpleEmail(user.getEmail(), "Dear "  + ",\n\n"
			+ "Your OTP for password Reset is [ " + randomNumber+ " ] .\n"
	+ "\n" + "Warm Regards,\n" + "Shopme Info Group,\n", "Password reset request");

		return Response.success(user);
	}
	
	
	@PostMapping("/forgotPasswordprocess")
	public ResponseEntity<?> forgotPasswordprocessing( @RequestBody Credentials cred) throws MessagingException {
		
		Employee user = empService.findUserFromdbByEmail(cred.getEmail());
		
		  if( cred.getOtp()==randomNumber) {
			  
			  String rawPassword = cred.getPassword();
			  
				String encPassword = passwordEncoder.encode(rawPassword);
				
			  user.setPassword(encPassword);
			  
//			  System.out.println("enc paasword "+encPassword);
			  
			  empDao.updateUserPassword(encPassword, user.getEmpId());

				if (user == null)
					return Response.error("user not found");
				
				emailSenderService.sendSimpleEmail(user.getEmail(), "Dear "  + ",\n\n"
						+ "Your password for shopme website is successfully changed.\n"
						+ "\n" + "Warm Regards,\n" + "shopme  Group,\n", "Your password have been reset ");
			
				
				randomNumber=0;
				
				return Response.success(user);
			  
		  }
		  
			return Response.error("Please enter valid otp!!!!");
		  
		

		
	}
	
	
	
	
	
	
//	@PostMapping("/signin")
//	public ResponseEntity<?> signIn(@RequestBody Credentials cred) {
//		EmployeeDto empDto = empService.findEmployeeByEmailAndPassword(cred);
//		if(empDto == null)
//			return Response.error("user not found");
//		return Response.success(empDto);
//	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> signIn(@RequestBody Credentials cred) {
		EmployeeDto empDto = empService.findEmployeeByEmailAndPassword(cred);
		if(empDto == null)
			return Response.error("user not found");
		return Response.success(empDto);
	}

	
	
	
	
	@GetMapping("/user/all")
	public ResponseEntity<?> getAllEmployees(){
		List<Employee> Employees = empService.findAllEmployees();
		if(Employees == null)
			return Response.error("No user Found in the list");
		return Response.success(Employees);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<?> getEmployeeById(@PathVariable("id") int id){
		 Employee Employee = empService.findEmployeeById(id);
		if(Employee == null)
			return Response.error("No user linked to this ID");
		return Response.success(Employee);
	}
	
//	@PostMapping("/user")
//	public ResponseEntity<?> addNewEmployee(@RequestBody Employee employee){
//		 Employee Employee = empService.addEmployee(employee);
//		if(Employee == null)
//			return Response.error("No user added");
//		return Response.success(Employee);
//	}
	
	@PostMapping("/user")
	public ResponseEntity<?> addNewEmployee(@RequestBody Employee employee){
		 Employee Employee = empService.addEmployee(employee);
		if(Employee == null)
			return Response.error("No user added");
		return Response.success(Employee);
	}

	
	
	
	
	//Update employee details
	@PostMapping("/user/{id}/details")
	public ResponseEntity<?> updateEmployeeDetails(@RequestBody EmployeeDetailsDto empDetails, @PathVariable int id){
		 //Employee emp = empService.updateEmpRole(id, role);
		Employee emp = empService.updateEmployeeDetails(empDetails, id);
		if(emp == null)
			return Response.error("Updation failed!!");
		return Response.success("details updated");
	}
	
	//delete employee  -- mark as inactive
	@PatchMapping("/user/{id}/delete")
	public ResponseEntity<?> deactivateEmployee(@PathVariable int id){
		 Employee emp = empService.updateEmployeeActiveStatus(id);
		if(emp == null)
			return Response.error("deletion failed!!");
		return Response.success("employee deactivates");
	}
	
	@DeleteMapping("/user/{id}/delete")
	public ResponseEntity<?> deleteEmployee(@PathVariable int id){
	int count=empService.deleteEmployeeDetails(id);
		if(count == 0)
			return Response.error("deletion failed!!");
		return Response.success("employee deleted successfully");
	}
	
	
	//Update employee status
//	@PostMapping("/user/{id}")
//	public ResponseEntity<?> updateEmployeeStatus(@RequestBody byte status, @PathVariable int id){
//		 Employee emp = empService.updateEmpStatus(id, status);
//		if(emp == null)
//			return Response.error("Updation failed!!");
//		return Response.success("record updated");
//	}
	
	
//	//Update employee role
//	@PutMapping("/user/{id}")
//	public ResponseEntity<?> updateEmployeeRole(@RequestBody String role, @PathVariable int id){
//		 Employee emp = empService.updateEmpRole(id, role);
//		if(emp == null)
//			return Response.error("Updation failed!!");
//		return Response.success("role updated");
//	}
	
	
//	@PutMapping("/user/")
//	public ResponseEntity<?> updateEmployeeById(@RequestBody Employee employee){
//		 Employee Employee = empService.addEmployeeOrUpdateEmployee(employee);
//		if(Employee == null)
//			return Response.error("Updation failed!!");
//		return Response.success(Employee);
//	}
		
	
}
