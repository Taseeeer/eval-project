import ProductCard from "./product-card";
import { data } from '../../data/dummy-data';
import ProductFilter from "./products-filter";
import { useContext } from "react";
import AppContext from "../../context/context";

export default function AllProducts() {

    const { searchFilter } = useContext(AppContext);

    return (
        <div>
            <ProductFilter />
            <div className='flex flex-wrap justify-around'>
                { data.filter((item) => {
                    if(searchFilter === '') {
                        return item;
                    } else if(item.name.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())) {
                        return item;
                    }
                }).map((item, index) => (
                    <ProductCard key={index} {...item} />
                ))}
            </div>
        </div>
    )
}