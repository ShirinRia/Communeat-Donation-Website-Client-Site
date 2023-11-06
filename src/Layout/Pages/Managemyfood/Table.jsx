import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useEffect, useMemo, useState } from 'react';
import useAxiossecure from "../../../Hooks/useAxiossecure";
import useAuth from '../../../Hooks/useAuth';
import { GrDocumentUpdate } from 'react-icons/gr';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { SiNginxproxymanager } from 'react-icons/si';
import Swal from 'sweetalert2'

const Table = () => {

  const { user } = useAuth()
  console.log(user)
  const [Myfood, setmyfood] = useState([]);
  
  const [xyz, setxyz] = useState([]);
  console.log('xyz',xyz)
  const axiosSecure = useAxiossecure()
  const url = `/userfood?email=${user?.email}`;
  useEffect(() => {

    axiosSecure.get(url)
      .then(res => {
        setmyfood(res.data)
      })
  }, [axiosSecure, url])
  console.log(Myfood)
  const itemDelete = (id_) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      .then((result) => {
        if (result.isConfirmed) {
          // fetch(`https://cosmetics-beauty-backend-mimjpskj0-shirin-sultanas-projects.vercel.app/carts/${id_}`,
          //     {
          //         method: 'DELETE',
          //     })
          //     .then(res => res.json())
          //     .then(data => {
          //         if (data.deletedCount > 0) {
          //             const filtered = carts.filter(cart => cart._id !== id_)
          //             setcarts(filtered)
          //             Swal.fire(
          //                 'Deleted!',
          //                 'Your file has been deleted.',
          //                 'success'
          //             )
          //         }
          //     })
          const del_url = `/table/${id_}`
          axiosSecure.delete(del_url)
            .then(res => {
              setmyfood(res.data)
            })

        }
      })
  }
  const data = useMemo(() => Myfood, [Myfood])
  /**@type import('@tanstack/react-table').ColumnDef<any>*/
  const columns = [
    {
      header: 'ID',
      accessorKey: '_id'
    },
    {
      header: 'Foodname',
      accessorKey: 'foodname'
    },
    {
      header: 'Quantity',
      accessorKey: 'quantity'
    },
    {
      header: 'Pick Up Location',

      accessorKey: 'address'
    },
    {
      header: 'Expiredate',

      accessorKey: 'expiredate'
    },
    {
      header: 'Additional Note',

      accessorKey: 'note'
    },

    // {
    //   header: 'Image',

    //   accessorKey: 'image'
    // },

  ]
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
  return (
    <div >
      <table className='mx-auto'>
        {table.getHeaderGroups().map(headergroup => (
          <tr key={headergroup._id} className='border-b-2 border-gray-950 '>
            {
              headergroup.headers.map(header => (
                <th className='py-8' key={header._id} >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))
            }
            <p className='py-8 px-4 font-bold text-gray-900'>Action</p>
          </tr>
        ))}
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row._id} className='border-b-2 border-gray-950 text-lg'>
              {row.getVisibleCells().map(cell => (
                <td className='py-8 px-4 text-center' key={cell._id} >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
               
              ))}

              <div className='py-8 px-4 space-y-8'>
                <GrDocumentUpdate className='text-2xl' />

                <div >
                  <button onClick={() => itemDelete("")}><RiDeleteBin6Fill className='text-2xl' /></button>
                </div>

                <SiNginxproxymanager className='text-2xl' />
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;