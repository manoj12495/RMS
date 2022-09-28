package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name="tableInfo")
public class TableInfo {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
   // @Column(name ="table_id")
	private int tableId;
	
    @Column(name ="tableCapacity")
	private int capacity;

    @Column(name ="tableStatus")
    private int tableStatus;  //0: available 1: occupied

    @ManyToOne
    @JoinColumn(name = "orderManager")
	private Employee OrderManager;
    
    
	public TableInfo() {
		// TODO Auto-generated constructor stub
	}


	public TableInfo(int tableId, int capacity, int tableStatus, Employee orderManager) {
		this.tableId = tableId;
		this.capacity = capacity;
		this.tableStatus = tableStatus;
		OrderManager = orderManager;
	}


	public TableInfo(int tableId, int capacity, int tableStatus) {
		this.tableId = tableId;
		this.capacity = capacity;
		this.tableStatus = tableStatus;
	}


	public int getTableId() {
		return tableId;
	}


	public void setTableId(int tableId) {
		this.tableId = tableId;
	}


	public int getCapacity() {
		return capacity;
	}


	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}


	public int getTableStatus() {
		return tableStatus;
	}


	public void setTableStatus(int tableStatus) {
		this.tableStatus = tableStatus;
	}


	public Employee getOrderManager() {
		return OrderManager;
	}


	public void setOrderManager(Employee orderManager) {
		OrderManager = orderManager;
	}


	@Override
	public String toString() {
		return "TableData [tableId=" + tableId + ", capacity=" + capacity + ", tableStatus=" + tableStatus
				+ ", OrderManager=" + OrderManager + "]";
	}

	
    
}
