package com.app.dtos;

public class EmployeeDetailsDto {

	private String name;
	private String contactNumber;
	private String email;
	private String password;
	private String aadharNumber;
	private String gender;
	private double salary;
	private String role;
	private int isActive;
	
	public EmployeeDetailsDto() {
		// TODO Auto-generated constructor stub
	}
	
	public EmployeeDetailsDto(String name, String contactNumber, String email, String password, String aadharNumber,
			String gender, double salary, String role, int isActive) {
		this.name = name;
		this.contactNumber = contactNumber;
		this.email = email;
		this.password = password;
		this.aadharNumber = aadharNumber;
		this.gender = gender;
		this.salary = salary;
		this.role = role;
		this.isActive = isActive;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
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

	public int getIsActive() {
		return isActive;
	}

	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}

	@Override
	public String toString() {
		return "EmployeeDetailsDto [ name=" + name + ", contactNumber=" + contactNumber + ", email="
				+ email + ", password=" + password + ", aadharNumber=" + aadharNumber + ", gender=" + gender
				+ ", salary=" + salary + ", role=" + role + ", isActive=" + isActive + "]";
	}
	
	
}
