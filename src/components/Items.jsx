import Item from './Item'
import data from '../data'
function Items(){
    return (
        <div className={`d-flex justify-content-center flex-wrap ms-5`}>
            {
        data.map( (book)=> {
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