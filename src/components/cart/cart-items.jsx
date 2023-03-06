import { useContext } from 'react'
import CartTable from './cart-table'
import AppContext from "../../context/context"
import { Link } from 'react-router-dom';

export default function CartItems() {


    const { items, total, removeItemFromCart, incrementItemQuantity, decrementItemQuantity } = useContext(AppContext);

    const roundeMyPrice = (price) => {
        return Math.round(price*100)/100;
    }

    if(!items.length > 0) {
        return (
        <div className='p-6 flex flex-col items-start'>
            <div className='text-gray-500'>You've not added any item.</div>
            <Link to='/' className='text-white bg-blue-600 py-2 mt-2 px-8 rounded hover:bg-blue-500'>Go back</Link>
        </div> 
        )
    }

    return (
        <div className='p-6 text-gray-500'>
            <p className='text-[1.5rem] text-blue-600 font-medium'>Your cart</p>

            <div>
                <CartTable items={items} />
                <div className='flex flex-col items-end py-2'>
                    <p className='sm:text-[1.5rem] text-[1.1rem] py-1 font-medium '>Subtotal: ${roundeMyPrice(total)}</p>
                    <p className='py-0 text-sm'>Tax and shipping will be calculated at checkout.</p>
                    <p className='pb-1 text-sm'>Order tracking services provided.</p>
                    <div className='flex gap-2'>
                        <button className='text-sm md:text-[1.1rem] text-white bg-blue-600 py-2 mt-2 px-8 rounded hover:bg-blue-500'>
                            <Link to='/'>Go back</Link>
                        </button>
                        <button className='text-sm md:text-[1.1rem] text-white bg-blue-600 py-2 mt-2 px-8 rounded hover:bg-blue-500'>Proceed to checkout</button>
                    </div>
                </div>
            </div>

        </div>
    )
}