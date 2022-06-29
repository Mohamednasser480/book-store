import Item from './Item'
import {useEffect, useState} from "react";
import data from '../data'
function Items(){
    const [books,setBooks] = useState(data);
    return (
        <div className={`d-flex justify-content-center flex-wrap ms-5`}>
            {
        books.map( (book)=> {
            return <Item className={`col-3`}
                title={book.title}
                img={book.img}
                author={book.author}
                price= {book.price}
                id={book.id}
            />
        })
        }
        </div>
    )
}
export default Items;