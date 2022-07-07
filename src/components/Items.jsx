import Item from './Item'
import data from '../data'
import {useEffect, useState} from "react";
import classes from "./Categories.module.css";
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
        <div className={` ${classes.categoriesContainer} col-10`}>
            <Button className={classes.categoriyButton} active={category==="all"} onClickhandler={handleOnclick} id={"all"}>all</Button>
            <Button className={classes.categoriyButton} active={category==="bestSeller"} onClickhandler={handleOnclick} id={"bestSeller"}>best seller</Button>
            <Button className={classes.categoriyButton} active={category==="fantasy"} onClickhandler={handleOnclick} id={"fantasy"}>fantasy</Button>
            <Button className={classes.categoriyButton} active={category==="history"} onClickhandler={handleOnclick} id={"history"}>history</Button>
            <Button className={classes.categoriyButton} active={category==="art"} onClickhandler={handleOnclick} id={"art"}>art</Button>
            <Button className={classes.categoriyButton} active={category==="love"} onClickhandler={handleOnclick} id={"love"}>love stories</Button>
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