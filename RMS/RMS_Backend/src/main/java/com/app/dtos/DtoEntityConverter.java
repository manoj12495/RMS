package com.app.dtos;

import org.springframework.stereotype.Component;

import com.app.entities.Category;
import com.app.entities.Employee;
import com.app.entities.Orders;
import com.app.entities.Products;
import com.app.entities.SuborderDetails;
import com.app.entities.TableInfo;

@Component
public class DtoEntityConverter {
	
	
		public EmployeeDto toEmpDto(Employee entity) {
			EmployeeDto dto = new EmployeeDto();
			dto.setId(entity.getEmpId());
			dto.setName(entity.getName());
			dto.setEmail(entity.getEmail());
			dto.setRole(entity.getRole());
			return dto;
		}
		
		//details to employee entity
		public Employee toEmpEntity(EmployeeDetailsDto empDetails, Employee emp) {
			
			emp.setName(empDetails.getName());
			emp.setContactNumber(empDetails.getContactNumber());
			emp.setEmail(empDetails.getEmail());
			if(empDetails.getPassword() != null) {
				emp.setPassword(empDetails.getPassword());
			}
			
			emp.setAadharNumber(empDetails.getAadharNumber());
			emp.setGender(empDetails.getGender());
			emp.setSalary(empDetails.getSalary());
			emp.setIsActive(empDetails.getIsActive());
			emp.setRole(empDetails.getRole());
			return emp;
		}

		public Employee toEmpEntity(EmployeeDto dto) {
			Employee entity = new Employee();
			entity.setEmpId(dto.getId());
			entity.setName(dto.getName());
			entity.setEmail(dto.getEmail());
			entity.setRole(dto.getRole());
			return entity;		
		}
		
		//details to employee entity
		public Category toCategoryEntity(CategoryDto catDto, Category category) {
			
			category.setName(catDto.getName());
			category.setCategoryStatus(catDto.getCategoryStatus());
			
			return category;
		}
		
		//category to category dto
		public CategoryDto toCategoryDto( Category category) {
			CategoryDto catDto = new CategoryDto();
			catDto.setCategoryId(category.getId());
			catDto.setName(category.getName());
			catDto.setCategoryStatus(category.getCategoryStatus());
			
			return catDto;
		}
		
		//Product dto to Products entity 
		public Products toProductsEntity(ProductDto prodDto, int catId) {
			Products product = new Products();
			
			Category category = new Category();
			category.setId(catId);
			
			product.setProductName(prodDto.getName());
			product.setPrice(prodDto.getPrice());
			product.setCategory(category);
			return product;
		}
		
		// product entity to dto convertor
		public ProductDto toProductsDto(Products product) {
			ProductDto proDto = new ProductDto();
						
			proDto.setName(product.getProductName());
			proDto.setPrice(product.getPrice());
			return proDto;
		}
		
		public Products toProductEntity(ProductDto productDto, Products product){
			
			product.setProductName(productDto.getName());
			product.setPrice(productDto.getPrice());
			return product;
		}
		
		//category to product details dto 
		public ProductDetailsDto toProductDetailsDto( Products product) {
			ProductDetailsDto productDetails = new ProductDetailsDto();
			productDetails.setCategoryId(product.getCategory().getId());
			productDetails.setCategoryName(product.getCategory().getName());
			productDetails.setCategoryStatus(product.getCategory().getCategoryStatus());
			
			productDetails.setProductId(product.getProductId());
			productDetails.setProductName(product.getProductName());
			productDetails.setPrice(product.getPrice());
			productDetails.setProductStatus(product.getProductStatus());			
			
			return productDetails;
		}

		//table
		public TableInfo toTableInfoEntity(TableDataDto tableDto, TableInfo table) {
			table.setCapacity(tableDto.getCapacity());
			table.setTableStatus(tableDto.getTableStatus());
			return table;
		}
		
		public SuborderDetails toSuborderEntity(OrderDetailsDto orderDtlDto) {
			SuborderDetails suborderDetails = new SuborderDetails();
			Orders order = new Orders();
			order.setOrderId(orderDtlDto.getOrderId());
			Products product = new Products();
			product.setProductId(orderDtlDto.getProductId());
			product.setProductName(orderDtlDto.getProductName());
			suborderDetails.setOrders(order);
			suborderDetails.setProductQuantity(orderDtlDto.getProductQuantity());
			suborderDetails.setProductRate(orderDtlDto.getProductRate());
			suborderDetails.setProducts(product);
			
			return suborderDetails;
		}
		
		//calculate amount
		public double calculeteAmount(SuborderDetails suborder)
		{
			return (suborder.getProductRate()) * (suborder.getProductQuantity());
		}
		
}
