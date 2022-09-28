package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.CategoryDto;
import com.app.dtos.ProductDetailsDto;
import com.app.dtos.ProductDto;
import com.app.dtos.Response;
import com.app.entities.Category;
import com.app.entities.Employee;
import com.app.entities.Products;
import com.app.services.CategoryProductServiceImpl;

@CrossOrigin
@RestController
public class ProductController {

	@Autowired
	private CategoryProductServiceImpl catService;
	
	//add category
	@PostMapping("/category/{category}")
	public ResponseEntity<?> addNewCategory(@PathVariable String category){
		
		 Category cat = catService.addCategory(category);
		if(cat == null)
			return Response.error("No user added");
		return Response.success(cat);
	}
	
	//get all categories
	@GetMapping("/category/all")
	public ResponseEntity<?> getAllCategories(){
		
		  List<Category> categoryList = catService.getAllCategories();
		if(categoryList == null)
			return Response.error("No user added");
		return Response.success(categoryList);
	}
		
	//get all active categories
	@GetMapping("/category/all/active")
	public ResponseEntity<?> getAllActiveCategories(){
		
		  List<CategoryDto> categoryList = catService.getActiceCategories();
		if(categoryList == null)
			return Response.error("No user added");
		return Response.success(categoryList);
	}
	
	//delete category
	@DeleteMapping("/category/{categoryId}")
	public ResponseEntity<?> deleteCategory(@PathVariable int categoryId){
		
		int count = catService.deleteCategory(categoryId);
		if(count != 1)
			return Response.error("No user added");
		return Response.success("category deleted");
	}
	
	//inActive/Active category
	@PutMapping("/category/{categoryId}/toggleStatus")
	public ResponseEntity<?> ChangeCategoryIsactiveStatus(@PathVariable int categoryId){
		
		int count = catService.toggleActiveStatus(categoryId);
		if(count != 1)
			return Response.error("No category status updated");
		return Response.success("category status updated");
	}

	//Update category details
	@PostMapping("/category/{categoryid}/update")
	public ResponseEntity<?> updateCategoryDetails(@RequestBody CategoryDto categoryDto, @PathVariable int categoryid){
		
		Category cat = catService.updateCategory(categoryDto, categoryid);
		if(cat == null)
			return Response.error("Updation failed!!");
		return Response.success(cat);
	}
	
	//add product
	@PostMapping("/product/{categoryId}")
	public ResponseEntity<?> addNewProduct(@PathVariable int categoryId ,@RequestBody ProductDto productDto){
		
		 Products product = catService.addProduct(productDto, categoryId);
		if(product == null)
			return Response.error("No user added");
		return Response.success(product);
	}
	
	//get all products by category Id
	@GetMapping("/product/{categoryId}")
	public ResponseEntity<?> getAllProducts(@PathVariable int categoryId){
		
		  List<Products> products = catService.getAllProductById(categoryId);
		if(products == null)
			return Response.error("No user added");
		return Response.success(products);
	}
	
	//get all product details list
	@GetMapping("/products")
	public ResponseEntity<?> getAllProductsList(){
		
		  List<ProductDetailsDto> productDetails = catService.getAllProducts();
		if(productDetails == null)
			return Response.error("No Products found");
		return Response.success(productDetails);
	}
		
	
	
	//get all Active products by category Id
	@GetMapping("/product/{categoryId}/active")
	public ResponseEntity<?> getAllActiveProducts(@PathVariable int categoryId){
		
		List<ProductDto> products = catService.getAllActiveProductById(categoryId);
		if(products == null)
			return Response.error("No user added");
		return Response.success(products);
	}
	
	//delete product
	@DeleteMapping("/product/{productId}")
	public ResponseEntity<?> deleteProduct(@PathVariable int productId){
		
		int count = catService.deleteProduct(productId);
		if(count != 1)
			return Response.error("No user added");
		return Response.success("category deleted");
	}
	
	//Update product details
	@PostMapping("/product/{productId}/update")
	public ResponseEntity<?> updateProduct(@RequestBody ProductDto productDto, @PathVariable int productId){
		
		Products product = catService.updateProduct(productDto, productId);
		if(product == null)
			return Response.error("Updation failed!!");
		return Response.success(product);
	}
	
	//inActive/Active product
	@PutMapping("/product/{productId}/toggleStatus")
	public ResponseEntity<?> ChangeProductIsactiveStatus(@PathVariable int productId){
		
		int count = catService.toggleProductActiveStatus(productId);
		if(count != 1)
			return Response.error("No product status updated");
		return Response.success("product status updated");
		}
}
