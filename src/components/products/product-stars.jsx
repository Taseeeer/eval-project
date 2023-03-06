import { AiFillStar } from 'react-icons/ai';

export default function ProductStars({ rating }) {

    const forStars = Array(rating).fill(0).map((_, i) => i);

    return (
        <div className='flex pt-2 items-center text-[1.4rem] text-yellow-400 cursor-pointer'>
            {[1,2,3,4,5].map((star, index) => (
                <div key={index}>
                    <AiFillStar style={{ color: `${index+1 <= rating ? '#FFD700' : '#6b7280'}` }} />
                </div>
            ))}
            <p className='text-[0.8rem] ml-2 text-white bg-blue-600 py-0 px-1 rounded'>{forStars.at(-1) + 1}</p>
        </div>
    )
}