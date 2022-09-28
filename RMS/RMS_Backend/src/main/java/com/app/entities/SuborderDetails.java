package com.app.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="suborderDetails")
public class SuborderDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name="suborder_id")
	private int suborderId;
	
	@ManyToOne
	@JoinColumn(name="orderId")
	@JsonBackReference
	private Orders orders;
	
	//@Column(name ="product_quantity")
	private int productQuantity;
	
	//@Column(name ="product_rate")
	private double productRate;
	
	
	//@Column(name ="suborder_status")
	private int suborderStatus;
	
	@OneToOne
	@JoinColumn(name="productId")
	private Products products;

	public SuborderDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SuborderDetails(int suborderId, Orders orders, int productQuantity, double productRate, int suborderStatus,
			Products products) {
		this.suborderId = suborderId;
		this.orders = orders;
		this.productQuantity = productQuantity;
		this.productRate = productRate;
		this.suborderStatus = suborderStatus;
		this.products = products;
	}

	public int getSuborderId() {
		return suborderId;
	}

	public void setSuborderId(int suborderId) {
		this.suborderId = suborderId;
	}

	public Orders getOrders() {
		return orders;
	}

	public void setOrders(Orders orders) {
		this.orders = orders;
	}

	public int getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}

	public double getProductRate() {
		return productRate;
	}

	public void setProductRate(double productRate) {
		this.productRate = productRate;
	}

	public int getSuborderStatus() {
		return suborderStatus;
	}

	public void setSuborderStatus(int suborderStatus) {
		this.suborderStatus = suborderStatus;
	}

	public Products getProducts() {
		return products;
	}

	public void setProducts(Products products) {
		this.products = products;
	}

	@Override
	public String toString() {
		return "SuborderDetails [suborderId=" + suborderId + ", orders=" + orders + ", productQuantity="
				+ productQuantity + ", productRate=" + productRate + ", suborderStatus=" + suborderStatus
				+ ", products=" + products + "]";
	}
	

	
    
	
}
