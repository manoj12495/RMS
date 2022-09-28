package com.app.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="category")
public class Category {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
    @Column(name ="categoryId")
	private int id;
	
    @Column(name ="categoryName")
	private String name;
    
    //@Column(name ="category_status")
    private int categoryStatus;

    @OneToMany(mappedBy = "category")
    //@JsonManagedReference
    @JsonIgnoreProperties("category")
	private List<Products> products;
    
	public Category() {
		// TODO Auto-generated constructor stub
	}

	public Category(int id, String name, int categoryStatus) {
		this.id = id;
		this.name = name;
		this.categoryStatus = categoryStatus;
	}

	public Category(int id, String name, int categoryStatus, List<Products> products) {
		
		this.id = id;
		this.name = name;
		this.categoryStatus = categoryStatus;
		this.products = products;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCategoryStatus() {
		return categoryStatus;
	}

	public void setCategoryStatus(int i) {
		this.categoryStatus = i;
	}

	public List<Products> getProducts() {
		return products;
	}

	public void setProducts(List<Products> products) {
		this.products = products;
	}

	@Override
	public String toString() {
		return "Category [id=" + id + ", name=" + name + ", categoryStatus=" + categoryStatus + ", products=" + products
				+ "]";
	}
	

}
