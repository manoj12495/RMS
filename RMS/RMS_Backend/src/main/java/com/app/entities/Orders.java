package com.app.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name="orders")
public class Orders {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
    //@Column(name ="order_id")
	private long orderId;
	
	@OneToOne //(cascade=CascadeType.ALL)
	@JoinColumn(name="paymentId")
	//@OneToOne(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
	private Payment payment;
    
    @Column(name ="orderGrossAmount")
	private double grossAmount;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name ="orderDateTime", insertable = false)
	private Date orderDateTime;
    
    @Column(name ="orderStatus")
	private int orderStatus; //0:in progress 1:completed
    
    @OneToMany(mappedBy = "orders")
    @JsonManagedReference
	private List<SuborderDetails> suborder;
	
    @ManyToOne
	@JoinColumn(name = "tableId")
	private TableInfo table;
 

	public Orders() {
	}

	public Orders(long orderId, Payment payment, double grossAmount, Date orderDateTime, int orderStatus,
			List<SuborderDetails> suborder, TableInfo table) {
		this.orderId = orderId;
		this.payment = payment;
		this.grossAmount = grossAmount;
		orderDateTime = orderDateTime;
		this.orderStatus = orderStatus;
		this.suborder = suborder;
		this.table = table;
	}

	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}


	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}


	public double getGrossAmount() {
		return grossAmount;
	}


	public void setGrossAmount(double grossAmount) {
		this.grossAmount = grossAmount;
	}


	public Date getOrderDateTime() {
		return orderDateTime;
	}


	public void setOrderDateTime(Date orderDateTime) {
		orderDateTime = orderDateTime;
	}


	public int getOrderStatus() {
		return orderStatus;
	}


	public void setOrderStatus(int orderStatus) {
		this.orderStatus = orderStatus;
	}


	public List<SuborderDetails> getSuborder() {
		return suborder;
	}


	public void setSuborder(List<SuborderDetails> suborder) {
		this.suborder = suborder;
	}


	public TableInfo getTable() {
		return table;
	}


	public void setTable(TableInfo table) {
		this.table = table;
	}


	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", payment=" + payment + ", grossAmount=" + grossAmount
				+ ", OrderDateTime=" + orderDateTime + ", orderStatus=" + orderStatus + ", suborder=" + suborder
				+ ", table=" + table + "]";
	}
	
    
}
