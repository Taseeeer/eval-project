import { useContext } from 'react'
import AppContext from "../../context/context"
import { data } from '../../data/dummy-data';
import { BiTrash, BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import itemPicture from '../../assets/ps5.jpeg'
import { Link } from 'react-router-dom';

export default function CartItems() {


    const { items, total, removeItemFromCart, incrementItemQuantity, decrementItemQuantity } = useContext(AppContext);

    if(!items.length > 0) return <div className='p-6 text-gray-500'>You've not added any item.</div>

    return (
        <div className='p-6 text-gray-500'>
            <p className='text-[2rem] font-medium'>Your cart</p>

            <div>
                <table className='w-full'>
                    <thead className=''>
                        <tr className='[&>*]:uppercase py-4 text-gray-500 border-b-2'>
                            <th className='text-start py-2'>Products</th>
                            <th className='text-start'>Quantity</th>
                            <th className='text-start'>Remove</th>
                            <th className='text-start'>Price</th>
                            <th className='text-start'>Total</th>
                        </tr>
                    </thead>

                    <tbody className='border-b-2'>
                        {items.map((item, index) => (
                            <tr key={index} className='rounded '>
                                <td className=' py-4 px-1'>
                                    <div className='flex'>
                                        <img src={itemPicture} alt={item.name} className='rounded w-[100px]' />
                                        <div className='flex flex-col px-2 gap-2'>
                                            <p>{item.name}</p>
                                            <p>Delivery time 3 days</p>
                                        </div>
                                    </div>
                                </td>
                                <td className=''>
                                    <div className='flex items-center gap-2'>
                                        <BiPlusCircle className='text-[1.2rem] cursor-pointer' onClick={() => incrementItemQuantity(item.id)}/>
                                        {item.quantity}
                                        <BiMinusCircle className='text-[1.2rem] cursor-pointer' onClick={() => decrementItemQuantity(item.id)} />
                                    </div>
                                </td>
                                <td className='text-red-400 cursor-pointer text-[1.2rem]'>{<BiTrash onClick={() => removeItemFromCart(item.id)} />}</td>
                                <td>${item.price}</td>
                                <td>$1000</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <div className='flex flex-col items-end py-2'>
                    <p className='sm:text-[1.5rem] text-[1.1rem] py-1 font-medium'>Subtotal: ${total}</p>
                    <p className='py-0'>Tax and shipping will be calculated at checkout.</p>
                    <p className='pb-1'>Order tracking services provided.</p>
                    <div className='flex gap-2'>
                        <Link to='/' className='text-white bg-blue-600 py-2 mt-2 px-8 rounded hover:bg-blue-500'>Go back</Link>
                        <button className='text-white bg-blue-600 py-2 mt-2 px-8 rounded hover:bg-blue-500'>Proceed to checkout</button>
                    </div>
                </div>
            </div>

        </div>
    )
}