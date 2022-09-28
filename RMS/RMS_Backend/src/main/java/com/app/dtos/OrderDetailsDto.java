package com.app.dtos;

public class OrderDetailsDto {
	private int tableId;
	private long orderId;
	private String categoryName;
	private int productId;
	private String productName;
	private double productRate;
	private int productQuantity;
	
	public OrderDetailsDto() {
	}

	public OrderDetailsDto(int tableId, long orderId, String categoryName, int productId, String productName,
			double productRate, int productQuantity) {
		this.tableId = tableId;
		this.orderId = orderId;
		this.categoryName = categoryName;
		this.productId = productId;
		this.productName = productName;
		this.productRate = productRate;
		this.productQuantity = productQuantity;
	}

	public int getTableId() {
		return tableId;
	}

	public void setTableId(int tableId) {
		this.tableId = tableId;
	}

	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public double getProductRate() {
		return productRate;
	}

	public void setProductRate(double productRate) {
		this.productRate = productRate;
	}

	public int getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}

	@Override
	public String toString() {
		return "OrderDetailsDto [tableId=" + tableId + ", orderId=" + orderId + ", categoryName=" + categoryName
				+ ", productId=" + productId + ", productName=" + productName + ", productRate=" + productRate
				+ ", productQuantity=" + productQuantity + "]";
	}
		
	
}
