const setItems = (books)=> localStorage.setItem('items', JSON.stringify(books));
const getItems = ()=>{
    let items = localStorage.getItem('items');
    items = items || [];
    return JSON.parse(items);
}

export {
    setItems,
    getItems
}
