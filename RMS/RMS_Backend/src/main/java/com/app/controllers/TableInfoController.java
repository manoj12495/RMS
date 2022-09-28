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
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.CategoryDto;
import com.app.dtos.Response;
import com.app.dtos.TableDataDto;
import com.app.entities.Category;
import com.app.entities.TableInfo;
import com.app.services.TableInfoService;

@RestController
@CrossOrigin
public class TableInfoController {

	@Autowired
	private TableInfoService tableSer;
	
	//add new table
	@PostMapping("/table/add/{capacity}")
	public ResponseEntity<?> addNewTable(@PathVariable int capacity){
		
		 TableInfo table = tableSer.addNewTable(capacity);
		if(table == null)
			return Response.error("No table added");
		return Response.success(table);
	}
	
	//add new table
	@DeleteMapping("/table/{tableId}")
	public ResponseEntity<?> deleteTable(@PathVariable int tableId){
		
		 int count = tableSer.deleteTable(tableId);
		if(count != 1)
			return Response.error("No table deleted");
		return Response.success(count);
	}
	
	//get all table list
	@GetMapping("/table/all")
	public ResponseEntity<?> getAllTableDetails(){
		
		 List<TableInfo> tableList = tableSer.getAllTables();
		if(tableList == null)
			return Response.error("No table added");
		return Response.success(tableList);
	}
	
	//occupied/unoccupied table
	@PutMapping("/table/{tableId}/toggleStatus/{tableStatus}")
	public ResponseEntity<?> ChangeCategoryIsactiveStatus(@PathVariable int tableId, @PathVariable int tableStatus){
		int count = -1;
		if(tableStatus == 0) {
			count = tableSer.makeTableUnoccupied(tableId);
		}else {
			 count = tableSer.makeTableOccupied(tableId);
		}
		if(count != 1)
			return Response.error("No table status updated");
		return Response.success("table status updated");
	}

	//Update table details
	@PostMapping("/table/{tableId}/update")
	public ResponseEntity<?> updateCategoryDetails(@RequestBody TableDataDto tableDto, @PathVariable int tableId){
		
		TableInfo table = tableSer.updatetableDetails(tableDto, tableId);
		if(table == null)
			return Response.error("Updation failed!!");
		return Response.success(table);
	}
	
}
