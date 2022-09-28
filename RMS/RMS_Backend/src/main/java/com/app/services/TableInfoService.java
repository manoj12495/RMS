package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.daos.TableInfoDao;
import com.app.dtos.CategoryDto;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.ProductDto;
import com.app.dtos.Response;
import com.app.dtos.TableDataDto;
import com.app.entities.Category;
import com.app.entities.Products;
import com.app.entities.TableInfo;

@Service
@Transactional
public class TableInfoService {

	@Autowired
	private TableInfoDao tableDao;
	
	@Autowired 
	private DtoEntityConverter converter;
	
	//add table
	public TableInfo addNewTable(int capacity)
	{
		TableInfo table  = new TableInfo();
		table.setCapacity(capacity);
		return tableDao.save(table);
	}
	
	//add table
	public int deleteTable(int tableId)
	{
		TableInfo table  = tableDao.findByTableId(tableId);
		if(table != null) {
			tableDao.deleteById(tableId);
			return 1;
		}
		return -1;	}
	
	//get all tables
	public List<TableInfo>  getAllTables()
	{
		List<TableInfo> tableList = tableDao.findAll();
		return tableList;
	}
	

	//update category
	public TableInfo updatetableDetails(TableDataDto tableDto,int tableId)
	{
		TableInfo table = tableDao.findByTableId(tableId);
		tableDto.setTableId(tableId);
		table = converter.toTableInfoEntity(tableDto, table);
		return tableDao.save(table);
	}
	
	//toggle table occupied or not status active status
	public int makeTableOccupied(int tableId)
	{
		//TableInfo table  = tableDao.findByTableId(tableId);
		 return tableDao.updateTableStatus(tableId, 1);	
	
				 
	}
	
	//toggle table Unoccupied or not status active status
	public int makeTableUnoccupied(int tableId)
	{
		//TableInfo table  = tableDao.findByTableId(tableId);
		return tableDao.updateTableStatus(tableId, 0);	
				 
	}
	
}
