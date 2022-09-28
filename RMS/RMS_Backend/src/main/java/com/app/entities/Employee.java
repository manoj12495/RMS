package com.app.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "employee")
public class Employee {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "employeeId")
	private int empId;

	@Column
	private String name;

	@Column(name = "contactNo")
	private String contactNumber;

	//@Column(name = "email")
	private String email;

	@Column
	private String password;

	@Column(name = "aadharcardNumber")
	private String aadharNumber;

	@Column
	private String gender;

	@Column
	private double salary;

	// @Enumerated(EnumType.STRING)
	@Column
	private String role;

	//@Column(name = "is_active")
	private int isActive;

	//@Column(name = "joining_date")
	@Temporal(TemporalType.DATE)
	private Date joiningDate;

//	@OneToMany(mappedBy = "orderManager")
//	private List<TableData> tableData;
//	    
//	
//	
	public Employee() {

	}

	public Employee(int empId, String name, String contactNumber, String email, String password, String aadharNumber,
			String gender, double salary, String role, int isActive, Date joiningDate) {
		super();
		this.empId = empId;
		this.name = name;
		this.contactNumber = contactNumber;
		this.email = email;
		this.password = password;
		this.aadharNumber = aadharNumber;
		this.gender = gender;
		this.salary = salary;
		this.role = role;
		this.isActive = isActive;
		this.joiningDate = joiningDate;
	}

	

	public Employee(String name, String contactNumber, String email, String password, String aadharNumber,
			String gender, double salary, String role, int isActive, Date joiningDate) {
		this.name = name;
		this.contactNumber = contactNumber;
		this.email = email;
		this.password = password;
		this.aadharNumber = aadharNumber;
		this.gender = gender;
		this.salary = salary;
		this.role = role;
		this.isActive = isActive;
		this.joiningDate = joiningDate;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
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

	public Date getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(Date joiningDate) {
		this.joiningDate = joiningDate;
	}
	

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", name=" + name + ", contactNumber=" + contactNumber + ", email=" + email
				+ ", password=" + password + ", aadharNumber=" + aadharNumber + ", gender=" + gender + ", salary="
				+ salary + ", role=" + role + ", isActive=" + isActive + ", joiningDate=" + joiningDate + "]";
	}

}
