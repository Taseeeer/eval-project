import { useContext } from 'react';
import { BiCartAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import AppContext from '../../context/context'

export default function Header() {

    const { items } = useContext(AppContext);

    return (
        <header className='border text-gray-500 p-6'>
            <nav>
                <ul className='flex justify-between text-[1.2rem]'>
                    <li><Link to='/' className='uppercase font-bold'>Logo</Link></li>
                    <li><Link to='/'>Products</Link></li>
                    <li className='flex items-center gap-2 text-[1.7rem]'>
                        <Link to='cart'>
                        <span className='relative'>
                            <p className='absolute text-[10px] text-white py-[3px] px-[8px] left-4 bottom-4 rounded-full bg-blue-700'>{items.length}</p><BiCartAlt />
                        </span>
                        </Link>
                    </li>
                </ul>
            </nav> 
        </header>
    )
}