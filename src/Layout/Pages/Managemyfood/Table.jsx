import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useEffect, useMemo, useState } from 'react';
import useAxiossecure from "../../../Hooks/useAxiossecure";
import useAuth from '../../../Hooks/useAuth';
import { GrDocumentUpdate } from 'react-icons/gr';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { SiNginxproxymanager } from 'react-icons/si';
const Table = () => {

  const { user } = useAuth()
  console.log(user)
  const [Myfood, setmyfood] = useState([]);
  const axiosSecure = useAxiossecure()
  const url = `/userfood?email=${user?.email}`;
  useEffect(() => {

    axiosSecure.get(url)
      .then(res => {
        setmyfood(res.data)
      })
  }, [axiosSecure, url])
  console.log(Myfood)
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
                  {flexRender(cell.column.columnDef.cell,
                    cell.getContext())}
                </td>
              ))}

              <div className='py-8 px-4 space-y-8'>
                <GrDocumentUpdate className='text-2xl' />
                <RiDeleteBin6Fill className='text-2xl' />

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