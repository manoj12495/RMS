package com.app.dtos;


public class EmployeeNewDto {
	
	private String name;
	private String contactNumber;
	private String userName;
	private String password;
	private String aadharNumber;	
	private double salary;	
	private String role;
	public EmployeeNewDto() {
		// TODO Auto-generated constructor stub
	}
	public EmployeeNewDto(String name, String contactNumber, String userName, String password, String aadharNumber,
			double salary, String role) {
		this.name = name;
		this.contactNumber = contactNumber;
		this.userName = userName;
		this.password = password;
		this.aadharNumber = aadharNumber;
		this.salary = salary;
		this.role = role;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAadharNumber() {
		return aadharNumber;
	}
	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "EmployeeNewDto [name=" + name + ", contactNumber=" + contactNumber + ", userName=" + userName
				+ ", password=" + password + ", aadharNumber=" + aadharNumber + ", salary=" + salary + ", role=" + role
				+ "]";
	}
	
	
}
