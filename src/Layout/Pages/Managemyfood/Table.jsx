import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useEffect, useMemo, useState } from 'react';
import useAxiossecure from "../../../Hooks/useAxiossecure";
import useAuth from '../../../Hooks/useAuth';
import { GrDocumentUpdate } from 'react-icons/gr';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { SiNginxproxymanager } from 'react-icons/si';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const Table = () => {

  const { user } = useAuth()
  console.log(user)
  const [Myfood, setmyfood] = useState([]);

  const [xyz, setxyz] = useState();
  const [name, setname] = useState();
  console.log('xyz', xyz)
  const axiosSecure = useAxiossecure()
  const url = `/userfood?email=${user?.email}`;
  useEffect(() => {

    axiosSecure.get(url)
      .then(res => {
        setmyfood(res.data)
      })
  }, [axiosSecure, url])
  console.log(Myfood)
  const handleaddproduct = e => {
    e.preventDefault();
    const form = e.target;
    const foodname = form.foodname.value;
    const quantity = form.quantity.value;
    const address = form.address.value;
    const status = form.status.value;
    const expiredate = form.expiredate.value;
    const note = form.note.value;
    const image = form.image.value;
    const donar_name = user.displayName
    const donar_email = user.email
    const donar_image = user.photoURL
    const newfood = { foodname, quantity, address, status, expiredate, note, image, donar_name, donar_email, donar_image }
    console.log(newfood);

    const url = `/updatefood?id=${xyz}`;
    axiosSecure.put(url, newfood)
      .then(function (response) {
        console.log(response);
        if (response.data.modifiedCount > 0) {
          setmyfood(newfood)
          Swal.fire({
            title: 'Success!',
            text: 'Product Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Thank You'
          })

        }
        else {
          Swal.fire({
            title: 'Error!',
            text: 'Update FAILED',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }
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

          const del_url = `/table/${id_}`
          axiosSecure.delete(del_url)
            .then(res => {
              console.log(res.data.deletedCount)
              if (res.data.deletedCount > 0) {
                const filtered = Myfood.filter(cart => cart._id !== id_)
                setmyfood(filtered)
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
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
      header: 'Note',

      accessorKey: 'note'
    },
    {
      header: "Action",
      cell: ({ row }) => {
        const x = row.original
        const id = x._id
        const name=x.foodname
        setxyz(id)
        setname(name)
        return (
          <div className='py-8 px-4 space-y-8'>

            <label htmlFor="my_modal_7" className="px-5 py-1 font-semibold  text-2xl border-gray-100  text-gray-100"><GrDocumentUpdate className='text-2xl' /></label>

            <div >
              <button onClick={() => itemDelete(id)}><RiDeleteBin6Fill className='text-2xl' /></button>
            </div>
            <div> <Link to={`/manage/${xyz}/${name}`}><SiNginxproxymanager className='text-2xl' /></Link></div>
          </div>
        )
      }
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
          <tr key={headergroup._id} className='border-b-2 border-gray-950 text-center'>
            {
              headergroup.headers.map(header => (
                <th className='py-8 px-4 text-center' key={header._id} >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))
            }

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


            </tr>
          ))}
        </tbody>
      </table>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="max-w-4xl mx-auto modal-box bg-transparent ">

          <form onSubmit={handleaddproduct} className="container  mx-auto space-y-12">
            <fieldset className="  p-6 rounded-md shadow-sm bg-gray-900 justify-center">

              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 m-6 space-y-3">
                <div className="col-span-full sm:col-span-3">

                  <input name="foodname" type="text" defaultValue={Myfood.foodname} placeholder="Food name" className="w-full rounded-md focus:ring border-gray-700 text-gray-900" />
                </div>

                <div className="col-span-full sm:col-span-3">

                  <input name="quantity" type="number" placeholder="Food Quantity" className="w-full rounded-md focus:ring   border-gray-700 text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-3">

                  <input name="address" type="text" placeholder="Pickup Location" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-3">

                  {/* <input name="quantity" type="number" placeholder="Food Quantity" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" />
                                 */}
                  <select className="select select-bordered w-full rounded-md focus:ring  border-gray-700 text-gray-900" name="status" defaultValue="Available" required>
                    <option disabled selected>Food Status</option>
                    <option value="Available">Available</option>

                  </select>
                </div>


                <div className="col-span-full sm:col-span-3">

                  <input name="expiredate" placeholder="Date"
                    type="date"
                    // onFocus="(this.type='date')"
                    // onBlur="(this.type='text')"
                    className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-3">

                  <input name="image" type="url" placeholder="Food Image" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" />
                </div>

                <div className="col-span-full">

                  <textarea name="note" placeholder="Additional Notes" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900"></textarea>
                </div>
                <input type="submit" value="Add Food" className="w-full col-span-full  text-white text-xl px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100" />
              </div>

            </fieldset>

          </form>
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </div>
  );
};

export default Table;