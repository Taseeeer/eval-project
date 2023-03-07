import itemPicture from '../../assets/img-1.jpg'
import { BiTrash, BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { useContext } from 'react';
import AppContext from '../../context/context';

export default function CartTable({ items }) {

    const { removeItemFromCart, incrementItemQuantity, decrementItemQuantity } = useContext(AppContext);

    return (
        <table className='w-full'>
            <thead className=''>
                <tr className='[&>*]:uppercase text-[10px] md:text-[0.9rem] py-4 text-gray-500 border-b-2'>
                    <th className='text-start py-2'>Products</th>
                    <th className='text-start'>Quantity</th>
                    <th className='text-start'>Remove</th>
                    <th className='text-start'>Price</th>
                </tr>
            </thead>

            <tbody className='border-b-2'>
                {items.map((item, index) => (
                    <tr key={index} className='rounded '>
                        <td className=' py-4 px-1'>
                            <div className='flex flex-col md:flex-row'>
                                <img src={itemPicture} alt={item.name} className='rounded w-[100px]' />
                                <div className='flex flex-col px-2 gap-2'>
                                    <p>{item.name}</p>
                                    <p>Delivery time 3 days</p>
                                </div>
                            </div>
                        </td>
                        <td className=''>
                            <div className='text-center flex items-center gap-1'>
                                <BiPlusCircle className='text-[1.2rem] cursor-pointer' onClick={() => incrementItemQuantity(item.id)}/>
                                {item.quantity}
                                <BiMinusCircle className='text-[1.2rem] cursor-pointer' onClick={() => decrementItemQuantity(item.id)} />
                            </div>
                        </td>
                        <td className='text-red-400 cursor-pointer text-[1.2rem]'>{<BiTrash onClick={() => removeItemFromCart(item.id)} />}</td>
                        <td>${item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}