import { useContext } from 'react';
import AppContext from '../../context/context';
import { BiSearch } from 'react-icons/bi';

export default function ProductFilter() {

    const { setSearchFilter, handleSortedItems } = useContext(AppContext);

    return (
        <div className='py-4 flex justify-center'>
            <div className='flex items-center gap-4 px-4 border rounded'>
                <BiSearch className='text-[1.5rem] text-blue-600' />
                <input placeholder='Search by name' className='w-[12.5rem] md:w-[31.5rem] rounded outline-none p-2' onChange={(e) => setSearchFilter(e.target.value)} />
            </div>
        </div>
    )
}