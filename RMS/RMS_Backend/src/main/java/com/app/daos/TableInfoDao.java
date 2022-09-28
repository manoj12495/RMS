package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.TableInfo;

public interface TableInfoDao extends JpaRepository<TableInfo, Integer>{

	TableInfo findByTableId(int tableId);
	
	@Modifying
	@Query("UPDATE TableInfo t SET t.tableStatus = ?2 WHERE t.tableId = ?1")
	int updateTableStatus(int id, int status);

}
