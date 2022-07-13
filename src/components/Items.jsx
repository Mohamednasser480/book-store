import Item from './Item'
import data from '../data'
import {useEffect, useState} from "react";
import classes from "./items.module.css";
import Button from "./UI/Button";
let category = "all";
function Items(){
    const [filterData, setFilterData] = useState(data);
    const handleOnclick = (e)=> {
        category = e.target.id;
        const filteredData = data.filter(book => book.categories.includes(category) || category === "all" || category === "bestSeller" || !category);
        setFilterData(filteredData);
    }
    return (
        <>
        <div className={`my-5 d-flex justify-content-center flex-wrap`}>
            <Button className={`${classes.categoryButton} mx-5 mx-md-3`} active={category==="all"} onClickhandler={handleOnclick} id={"all"}>all</Button>
            <Button className={`${classes.categoryButton} mx-5 mx-md-3`} active={category==="bestSeller"} onClickhandler={handleOnclick} id={"bestSeller"}>best seller</Button>
            <Button className={`${classes.categoryButton} mx-5 mx-md-3`} active={category==="fantasy"} onClickhandler={handleOnclick} id={"fantasy"}>fantasy</Button>
            <Button className={`${classes.categoryButton} mx-5 mx-md-3`} active={category==="history"} onClickhandler={handleOnclick} id={"history"}>history</Button>
            <Button className={`${classes.categoryButton} mx-5 mx-md-3`} active={category==="art"} onClickhandler={handleOnclick} id={"art"}>art</Button>
            <Button className={`${classes.categoryButton} mx-5 mx-md-3`} active={category==="love"} onClickhandler={handleOnclick} id={"love"}>love stories</Button>
        </div>
        <div className={`container`}>
            <div className={`row`}>
                { filterData.map( (book)=> {
                    return <Item className={`py-3 col-lg-3 col-md-6 col-8`}
                                 title={book.title}
                                 img={book.img}
                                 author={book.author}
                                 price={book.price}
                                 id={book.id}
                    />
                })}
            </div>
        </div>
        </>
    )
}
export default Items;