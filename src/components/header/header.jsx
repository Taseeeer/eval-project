import { useContext, useState } from 'react';
import { BiCartAlt, BiMenu, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import AppContext from '../../context/context'

export default function Header() {

    const { items, totalCartItems } = useContext(AppContext);
    const [ open, setOpen ] = useState(false);

    return (
        <header className='border text-gray-500 p-6'>
            <nav className='flex items-center justify-between'>
                <div className='flex items-center justify-between w-full md:w-max'>
                    <Link to='/' className='uppercase text-[1.2rem] font-bold text-blue-600'>Logo</Link>
                    <span className='md:hidden text-[1.7rem] cursor-pointer' onClick={() => setOpen(!open)}>
                        { open ? <BiX /> : <BiMenu /> }
                        
                    </span>
                </div>
                <div className={`absolute md:static bg-gray-100 md:bg-white w-full min-h left-0`} style={{ top: `${open ? '9%' : '-100%'}`, transition: '0.3s ease-in-out' }}>
                    <ul className='flex flex-col p-4 md:p-0 md:flex-row gap-8 pl-6 md:gap-0 text-[1.1rem]'>
                        <div className='flex flex-col md:flex-row md:gap-[2.5rem] md:ml-auto gap-[1.5rem]'>
                            <li className='hover:text-blue-600'><Link to='/'>Products</Link></li>
                            <li className='hover:text-blue-600'><Link to='/'>Our Story</Link></li>
                            <li className='hover:text-blue-600'><Link to='/'>Custome</Link></li>
                        </div>
                        <li className='flex items-center gap-2 text-[1.7rem] md:ml-auto'>
                            <Link to='/cart'>
                            <span className='relative'>
                                <p className={`absolute text-[10px] text-white py-[3px] px-[8px] left-4 bottom-4 rounded-full ${totalCartItems > 0 ? 'bg-blue-600' : 'bg-gray-600'}`}>{totalCartItems}</p><BiCartAlt />
                            </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav> 
        </header>
    )
}