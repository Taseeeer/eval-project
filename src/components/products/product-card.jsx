import ps5 from '../../assets/ps5.jpeg'
import { AiFillStar } from 'react-icons/ai';
import { useContext } from 'react';
import AppContext from '../../context/context';

export default function ProductCard({ id, name, price }) {

    const { items, addToCart, total } = useContext(AppContext);

    return (
        <div className='p-6 w-max'>
            <div className='py-2 px-4 shadow-md rounded'>
                <img src={ps5} alt='playstation 5' className='rounded w-[200px] bg-auto' />
                <div>
                    <p className='text-[1.2rem] text-gray-500 pt-4'>{name}</p>
                    <div className='flex pt-2 items-center text-[1.4rem] text-yellow-400 cursor-pointer'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <p className='text-[0.8rem] ml-2 text-white bg-blue-600 py-0 px-1 rounded'>5.0</p>
                    </div>

                    <p className='text-[1.5rem] py-2 font-medium'>${price}</p>
                    <button className='w-full text-white bg-blue-600 py-2 px-4 rounded hover:bg-blue-500'
                    onClick={() => addToCart(id, name, price )}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}