package com.app.services;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.CategoryDao;
import com.app.daos.ProductDao;
import com.app.dtos.CategoryDto;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.ProductDetailsDto;
import com.app.dtos.ProductDto;
import com.app.entities.Category;
import com.app.entities.Products;

@Transactional
@Service
public class CategoryProductServiceImpl {
	
	@Autowired
	private CategoryDao categoryDao;
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private DtoEntityConverter converter;
	
	//add new category
	public Category addCategory(String category)
	{
		Category cat = new Category();
		cat.setName(category);
		//cat.setId(0);
		cat.setCategoryStatus(1);
		return categoryDao.save(cat);
		 
	}
	
	//get all active categories 
	public List<CategoryDto> getActiceCategories()
	{
	
		List<Category> categoryList = categoryDao.findAll();
		return categoryList.stream()
				.map(category -> converter.toCategoryDto(category))
				.filter(category -> category.getCategoryStatus() != 0)
				.collect(Collectors.toList());
		
		 
	}
	
	//get all categories 
	public List<Category> getAllCategories()
	{
		List<Category> categories = categoryDao.findAll();		
		return categories;		 
	}
		
	
	//delete category
	public int deleteCategory(int categoryId)
	{
		Category category = categoryDao.findById(categoryId);
		if(category != null)
		{
			categoryDao.deleteById(categoryId);	
			return 1;
		}
			return 0;		 
	}
	
	//toggle category active status
	public int toggleActiveStatus(int categoryId)
	{
		Category category = categoryDao.findById(categoryId);
		if(category.getCategoryStatus() == 0)
		{
			return categoryDao.updateCategoryStatus(categoryId, 1);	
			
		}else
		{
			return categoryDao.updateCategoryStatus(categoryId, 0);	
		}
				 
	}
	
	
	//update category
	public Category updateCategory(CategoryDto categoryDto,int categoryId)
	{
		Category cat = categoryDao.findById(categoryId);
		cat = converter.toCategoryEntity(categoryDto,cat);
		return categoryDao.save(cat);
	}
	
	//add products
	public Products addProduct(ProductDto productDto, int categoryId) {
		Products product = converter.toProductsEntity(productDto, categoryId);
		return productDao.save(product);
		
	}
	
	//get all products 
	public List<ProductDetailsDto> getAllProducts()
	{
		 List<Products> productList = productDao.findAll();

		 return productList.stream()
			.map(product -> converter.toProductDetailsDto(product))
			.collect(Collectors.toList());

		
	}
	
	//get all products by category id
	public List<Products> getAllProductById(int catId)
	{
		List<Products> products = productDao.findByCategory_id(catId);
		//List<Category> categories = categoryDao.findAll();		
		return products;		 
	}

	//get all active products 
	public List<ProductDto> getAllActiveProductById(int catId)
	{
		List<Products> products = productDao.findByCategory_id(catId);
		List<ProductDto> prodDto = products.stream()
		.filter(product -> product.getProductStatus() == 1)
		.map(product -> converter.toProductsDto(product))		
		.collect(Collectors.toList());
		return prodDto;		 
	}
	
	//delete category
	public int deleteProduct(int ProductId)
	{
		Products product = productDao.findById(ProductId).orElse(null);
		if(product != null)
		{
			productDao.deleteById(ProductId);	
			return 1;
		}
			return 0;		 
	}
	
	//update category
	public Products updateProduct(ProductDto productDto,int ProductId)
	{
		Products product = productDao.findById(ProductId).orElse(null);
		product = converter.toProductEntity(productDto, product);
		return productDao.save(product);
	}
	
	//toggle product active status
	public int toggleProductActiveStatus(int productId)
	{
		Products product = productDao.findById(productId).orElse(null);
		if(product.getProductStatus() == 0)
		{
			return productDao.updateProductStatus(productId, 1);	
			
		}else
		{
			return productDao.updateProductStatus(productId, 0);	
		}
				 
	}

}
