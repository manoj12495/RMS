package com.app.dtos;

public class TableDataDto {

	private int tableId;
	private int capacity;
	private int tableStatus;
	private int OrderManager;   //captain tableId  who manages the order on this table
	private int currentOrder;  //current order present on the table
	
	
	public TableDataDto() {
		// TODO Auto-generated constructor stub
	}


	public TableDataDto(int tableId, int capacity, int tableStatus, int orderManager, int currentOrder) {
		this.tableId = tableId;
		this.capacity = capacity;
		this.tableStatus = tableStatus;
		OrderManager = orderManager;
		this.currentOrder = currentOrder;
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


	public int getOrderManager() {
		return OrderManager;
	}


	public void setOrderManager(int orderManager) {
		OrderManager = orderManager;
	}


	public int getCurrentOrder() {
		return currentOrder;
	}


	public void setCurrentOrder(int currentOrder) {
		this.currentOrder = currentOrder;
	}


	@Override
	public String toString() {
		return "TableDataDto [tableId=" + tableId + ", capacity=" + capacity + ", tableStatus=" + tableStatus
				+ ", OrderManager=" + OrderManager + ", currentOrder=" + currentOrder + "]";
	}

	
	
}
