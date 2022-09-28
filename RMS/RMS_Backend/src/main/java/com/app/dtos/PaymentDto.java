package com.app.dtos;

public class PaymentDto {

	private long orderId;
	private int tableId;
	private long paymentId;
	private String paymentType;
	private int paymentStatus;
	
	public PaymentDto() {
		// TODO Auto-generated constructor stub
	}
	public PaymentDto(long orderId, int tableId, long paymentId, String paymentType, int paymentStatus) {
		this.orderId = orderId;
		this.tableId = tableId;
		this.paymentId = paymentId;
		this.paymentType = paymentType;
		this.paymentStatus = paymentStatus;
	}
	public long getOrderId() {
		return orderId;
	}
	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}
	public int getTableId() {
		return tableId;
	}
	public void setTableId(int tableId) {
		this.tableId = tableId;
	}
	public long getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(long paymentId) {
		this.paymentId = paymentId;
	}
	public String getPaymentType() {
		return paymentType;
	}
	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}
	public int getPaymentStatus() {
		return paymentStatus;
	}
	public void setPaymentStatus(int paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	@Override
	public String toString() {
		return "PaymentDto [orderId=" + orderId + ", tableId=" + tableId + ", paymentId=" + paymentId + ", paymentType="
				+ paymentType + ", paymentStatus=" + paymentStatus + "]";
	}
	
	
}
