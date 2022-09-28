package com.app.dtos;

public class ProductDetailsDto {

	private int productId;
	private int categoryId;
	private String productName;
	private double price;
	private int productStatus;
	private String categoryName;
	private int  categoryStatus;
	public ProductDetailsDto() {
		// TODO Auto-generated constructor stub
	}
	public ProductDetailsDto(int productId, int categoryId, String productName, double price, int productStatus,
			String categoryName, int categoryStatus) {
		this.productId = productId;
		this.categoryId = categoryId;
		this.productName = productName;
		this.price = price;
		this.productStatus = productStatus;
		this.categoryName = categoryName;
		this.categoryStatus = categoryStatus;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getProductStatus() {
		return productStatus;
	}
	public void setProductStatus(int productStatus) {
		this.productStatus = productStatus;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public int getCategoryStatus() {
		return categoryStatus;
	}
	public void setCategoryStatus(int categoryStatus) {
		this.categoryStatus = categoryStatus;
	}
	@Override
	public String toString() {
		return "ProductDetailsDto [productId=" + productId + ", categoryId=" + categoryId + ", productName="
				+ productName + ", price=" + price + ", productStatus=" + productStatus + ", categoryName="
				+ categoryName + ", categoryStatus=" + categoryStatus + "]";
	}
		
}
