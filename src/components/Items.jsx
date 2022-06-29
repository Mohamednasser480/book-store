import Item from './Item'
import {useEffect, useState} from "react";
import data from '../data'
function Items(){
    const [books,setBooks] = useState(data);
    const [subject,setSubject] = useState('poetry');
    return (
        <div className={`d-flex justify-content-center flex-wrap ms-5`}>
            {
        books.map( (book)=> {
            return <Item className={`col-3 p-1`}
                title={book.title}
                img={book.img}
                author={book.author}
                price= {book.price}
            />
        })
        }
        </div>
    )
}
export default Items;