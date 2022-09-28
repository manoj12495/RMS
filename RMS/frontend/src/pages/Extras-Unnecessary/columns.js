import './columns.css'
import {Link} from 'react-router-dom'

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    disableFilters: true,
    sticky: 'left'
  },
    {
      Header:'Name',
      Footer:'Name',
      columns:[
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        path:'/'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',

      },
    ]
    },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country'
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone'
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Age',
    Footer: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Edit',
    Footer: 'Edit',
    accessor: 'edit',
    Cell:({})=>{
      return(
      <>
        <Link to={"/orders/"}>
            <button className="userListEdit">Edit1</button>
        </Link>
        <button className="userListDelete">Delete</button>
      </>
      )
    }
  },
]

// export const GROUPED_COLUMNS = [
//   {
//     Header: 'Id',
//     accessor: 'id',
//     disableFilters: true,
//     sticky: 'left'
//   },
//     {
//       Header:'Name',
//       columns:[
//       {
//         Header: 'First Name',
//         accessor: 'first_name',
//         path:'/'
//       },
//       {
//         Header: 'Last Name',
//         accessor: 'last_name',

//       },
//     ]
//     },
//   {
//     Header: 'Country',
//     accessor: 'country'
//   },
//   {
//     Header: 'Phone',
//     accessor: 'phone'
//   },
//   {
//     Header: 'Email',
//     accessor: 'email'
//   },
//   {
//     Header: 'Age',
//     accessor: 'age'
//   },

// ]

