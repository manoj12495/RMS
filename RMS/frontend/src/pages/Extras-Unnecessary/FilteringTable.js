import React, { useMemo, useState } from 'react'
import { useTable, useFilters, useGlobalFilter,useSortBy,usePagination } from 'react-table'
import MOCK_DATA from '../order/MOCK_DATA.json'
import { COLUMNS } from './columns'
import { GlobalFilter } from '../../components/filter/GlobalFilter'
import tableStyle from "./FilterTable.module.css";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import * as FcIcons from 'react-icons/fc'
import {Button, Modal, Table} from 'react-bootstrap'
import 'reactjs-popup/dist/index.css';

export const FilteringTable = ({allOrders}) => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])
  const[userDataArray,setUserDataArray]=useState([{id:1,first_name: 'akshay', last_name: 'jawale', country: 'india',
                                       phone:'5641234',email:'asdd@gmail.com',age: '26',edit:'edit'}])
  const[count,setCount]=useState(2)
  // const data=userDataArray;


  const {
    getTableProps,
    getTableBodyProps,
    page,
    nextPage,
    prepareRow,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    headerGroups,
    state: { pageIndex, pageSize ,globalFilter},
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  // const { pageIndex, pageSize } = state
  // const { globalFilter } = state

  const[firstName,setFirstName]=useState("")
  const[lastName,setLasttName]=useState("")
  const[country,setCountry]=useState("")
  const[age,setAge]=useState("")

  const [show, setShow] = useState(false);
  
    function handleSave(){
      setShow(false);
      setCount(count+1);
      const userData={
        id:count,
        first_name:firstName,
        last_name:lastName,
        country:country,
        age:age
      }
      console.log(userData)
      console.log("data saved")
      setUserDataArray([...userDataArray,userData])
    }
    function handleClose(){
      setShow(false);
      console.log("modal closed")
    }
  const handleShow = () => setShow(true);

  return (
    <>
    <div>
    <div classN="flist">
    <div class="px-2 display-6" id="title-size"> List</div>
        <div class="container mt-3 px-2" id="search-bar">
            <div class="mb-2 d-flex justify-content-between align-items-center">
                <div class="position-relative"> <span class="position-absolute search"><i class="fa fa-search"></i></span> 
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                </div>
            <div class="px-5 mb-4" id='icon-size'> 
            <button onClick={handleShow}><FcIcons.FcPlus /> </button>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header>
                <Modal.Title>Add Order</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <form action=""  style={{display:"flex", flexDirection:"column"}}>
                    <label>First Name : </label>
                      <input type="text" 
                      onChange={(e)=>{
                     setFirstName(e.target.value);
                      }}/>
                    <label>Last Name : </label>
                      <input type="text" 
                        onChange={(e)=>{
                          setLasttName(e.target.value);
                           }}/>
                    <label>Country : </label>
                      <input type="text" 
                        onChange={(e)=>{
                          setCountry(e.target.value);
                           }}/>
                    <label>Age : </label>
                      <input type="number" 
                        onChange={(e)=>{
                          setAge(e.target.value);
                           }}/>
                      <div>
              </div>
                  </form>
              </Modal.Body>
            <Modal.Footer>
            <Button onClick={handleSave}>Save</Button>
              <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>

         </div>
      </div>
    </div>
    
       <table {...getTableProps()} className={tableStyle.table} >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <BsCaretDownFill className={tableStyle.icon} />
                      ) : (
                        <BsCaretUpFill className={tableStyle.icon} />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
              {/* <th>Edit</th>
              <th>Delete</th> */}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <>
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            
              </>
            );
       
          })}
        </tbody>
      </table>
      </div>
      <div className={tableStyle.btn}>
        <select
          name=""
          id=""
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              show {pageSize} items
            </option>
          ))}
        </select>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>{" "}
        <span>
          <span> Go to page &nbsp;</span>
          <span>
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value - 1)
                  : 0;
                gotoPage(pageNumber);
              }}
            />
          </span>
        </span>
        <button
          onClick={() => {
            gotoPage(0);
          }}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>
        <button
          onClick={() => {
            previousPage();
          }}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          onClick={() => {
            nextPage();
          }}
          disabled={!canNextPage}
        >
          Next
        </button>
        <button
          onClick={() => {
            gotoPage(pageCount - 1);
          }}
          disabled={!canNextPage}
        >
          {">>"}
        </button>
      </div>
      </div>
    </>
  )
}
