import React, { useState,Component, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import tableStyle from "./AllOrders.module.css";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import * as FcIcons from 'react-icons/fc'
import {Button, Modal, Table} from 'react-bootstrap'
import 'reactjs-popup/dist/index.css';
// import DATA from './MOCK_DATA.json'
import { COLUMNS } from '../order/columns.js'
import { GlobalFilter } from '../../components/filter/GlobalFilter'
import {ColumnFilter} from '../../components/filter/ColumnFilter'
// const COLUMNS = [
//   {
//     Header: 'Id',
//     Footer: 'Id',
//     accessor: 'id',
//     disableFilters: true,
//     sticky: 'left'
//   },
//   {
//     Header: 'First Name',
//     Footer: 'First Name',
//     accessor: 'first_name',
//     sticky: 'left'
//   },
//   {
//     Header: 'Last Name',
//     Footer: 'Last Name',
//     accessor: 'last_name',
//     sticky: 'left'
//   },
//   {
//     Header: 'Country',
//     Footer: 'Country',
//     accessor: 'country',
//     sticky: 'left'
//   },
//   {
//     Header: 'Age',
//     Footer: 'Age',
//     accessor: 'age'
   
//   }
// ]


const AllOrders = ({  }) => {
  // console.log(allOrders);
  const[userDataArray,setUserDataArray]=useState([{id:1,first_name: 'akshay', last_name: 'jawale', country: 'india',phone:'12435',
                                      email:"asha@gmail.com", age: '26'}])
  const[count,setCount]=useState(2)

  // const defaultColumn = React.useMemo(
  //   () => ({
  //     Filter: ColumnFilter
  //   }),
  //   []
  // )

  const columns = useMemo(() => COLUMNS, []);
  // const columns = COLUMNS;
  // const data = DATA;
  const data=userDataArray;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state: { pageIndex, pageSize },
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination,
    useGlobalFilter,
   
  );
  const { globalFilter } = state

  const[firstName,setFirstName]=useState("")
  const[lastName,setLasttName]=useState("")
  const[country,setCountry]=useState("")
  const[age,setAge]=useState("")

  const [show, setShow] = useState(false);
  
    function handleSave(){
      setShow(false);
      setCount(count+1);
      // console.log(firstName, lastName, country, age)
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

    
    
    // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(userDataArray)
  return (

    <div className="orderList">
      <div class="px-2" id="title-size">Order List</div>
        <div class="container mt-3 px-2" id="search-bar">
            <div class="mb-2 d-flex justify-content-between align-items-center">
                <div class="position-relative"> <span class="position-absolute search"><i class="fa fa-search"></i></span> 
                       <input class="form-control w-100" placeholder="Search by order#, name..." /> 
                </div>

                {/* <div class="px-2"> <span>Filters <i class="fa fa-angle-down"></i></span> <i class="fa fa-ellipsis-h ms-3"></i> </div> */}
            <div class="px-5 mb-4" id='icon-size'> 
            {/* <Popup trigger={<button className="addition"> <FcIcons.FcPlus /></button>} position="left center"> </Popup> */}

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
              <Button onClick={handleSave}>Save</Button>
              <Button onClick={handleClose}>Close</Button>
              </div>
                  </form>
              </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
            </Modal>

         </div>
      </div>

      <div >
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
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
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
          {[5, 15].map((pageSize) => (
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
    </div>
  );
};

export default AllOrders;
