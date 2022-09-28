package com.app.dtos;

public class CategoryDto {

	private int categoryId;
	private String name;
	private int categoryStatus;
	
	public CategoryDto() {
		// TODO Auto-generated constructor stub
	}

	

	public CategoryDto(int categoryId, String name, int categoryStatus) {
		this.categoryId = categoryId;
		this.name = name;
		this.categoryStatus = categoryStatus;
	}



	public int getCategoryId() {
		return categoryId;
	}



	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
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

	public void setCategoryStatus(int categoryStatus) {
		this.categoryStatus = categoryStatus;
	}

	@Override
	public String toString() {
		return "CategoryDto [categoryId=" + categoryId + ", name=" + name + ", categoryStatus=" + categoryStatus + "]";
	}

	    
}
