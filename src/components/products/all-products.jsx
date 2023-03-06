import ProductCard from "./product-card";
import { data } from '../../data/dummy-data';
export default function AllProducts() {
    return (
        <div className='flex flex-wrap justify-around'>
            {data.map((item, index) => (
                <ProductCard key={index} {...item} />
            ))}
        </div>
    )
}