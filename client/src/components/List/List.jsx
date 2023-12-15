import React, { useEffect, useState } from 'react';
import "./List.css";
import Card from '../Card/Card';
import shopApi from '../../api/modules/shop.api';

const List = ({ maxPrice, sort, subCat }) => {

    const [data, setData] = useState([]);

    const fetchData = async (data) => {
        const products = await shopApi.getList({ qs: data });
        // console.log(products);
        setData(products.data);
    }

    useEffect(() => {
        let data = `populate=*${subCat.map(
            (item) => `&[filters][sub_categories][title]=${item}`
        )}&[filters][price][$lte]=${maxPrice}${sort.length > 0 ? `&sort[0]=price:${sort}` : ''}`
        data = data.replaceAll(",", "")
        // getList(data);
        // console.log(data);
        fetchData(data);
    }, [maxPrice, sort, subCat])


    const product = (item) => {
        return (
            // <Card key={item.id} item={item} />
            <Card key={item.id} item={item.attributes} id={item.id} />
        )
    }

    return (
        <div className="list">
            <div className="products">
                {data.map(product)}
            </div>
        </div>
    )
}

export default List