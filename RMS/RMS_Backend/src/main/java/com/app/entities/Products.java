package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="product")
public class Products {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
   // @Column(name ="product_id")
	private int productId;
	
	@ManyToOne
	//@JsonBackReference
	@JsonIgnoreProperties("products")
	@JoinColumn(name = "categoryId")
	private Category category;
    
    //@Column(name ="product_name")
	private String productName;
    
    @Column(name ="productPrice")
	private double price;
      
    //@Column(name ="product_status")
    private int productStatus;
     
	public Products() {
		// TODO Auto-generated constructor stub
	}

	public Products(int productId, Category category, String productName, double price, int productStatus) {
		this.productId = productId;
		this.category = category;
		this.productName = productName;
		this.price = price;
		this.productStatus = productStatus;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
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

	@Override
	public String toString() {
		return "Products [productId=" + productId + ", category=" + category + ", productName=" + productName
				+ ", Price=" + price + ", productStatus=" + productStatus + "]";
	}

	
    
}
