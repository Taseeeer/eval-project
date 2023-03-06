import mKeyboard from '../../assets/img-1.jpg'
import { AiFillStar, AiOutlineCheck } from 'react-icons/ai';
import { useContext, useState } from 'react';
import AppContext from '../../context/context';

export default function ProductCard({ id, name, price }) {

    const { items, addToCart } = useContext(AppContext);
    const [ addedState, setAddState ] = useState(false);

    const randomNumber = Math.floor(Math.random() * 500);
    // if you want to generate random image for each product card, you can make use of the link given below,
    // just put it in the src of the img tag.
    // `https://picsum.photos/${randomNumber}/300.jpg`

    const handleAddToCart = (id, name, price) => {
        addToCart(id,name, price);

        setAddState(true)
        setTimeout(() => {
            setAddState(false)
        }, 300);
    }

    return (
        <div className='p-6 w-[20rem] text-gray-500 [&>*]:hover:text-gray-800'>
            <div className='py-2 px-4 shadow-md rounded'>
                <img src={mKeyboard} alt='playstation 5' className='rounded w-full max-h-52 bg-auto' />
                <div>
                    <p className='text-[1.1rem] pt-4'>{name}</p>
                    <div className='flex pt-2 items-center text-[1.4rem] text-yellow-400 cursor-pointer'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <p className='text-[0.8rem] ml-2 text-white bg-blue-600 py-0 px-1 rounded'>5.0</p>
                    </div>

                    <p className='text-[1.5rem] py-2 font-medium'>${price}</p>
                    <button className={`w-full text-white bg-blue-600 py-2 px-4 rounded hover:bg-blue-500`}
                    onClick={() => handleAddToCart(id, name, price )}>{addedState ? <div className='py-[4px] flex items-center justify-center'><AiOutlineCheck /></div> : 'Add to cart'}</button>
                </div>
            </div>
        </div>
    )
}