const setItems = (books)=> localStorage.setItem('items', JSON.stringify(books));
const getItems = ()=>{
    let items = localStorage.getItem('items');
    items = items || [];
    return JSON.parse(items);
}
const getItemApi = ()=>{
    let items = localStorage.getItem('itemsAPI');
    items = items || [];
    return JSON.parse(items);
}
const setItemsAPI = (books)=> localStorage.setItem('itemsAPI', JSON.stringify(books));
export {
    setItems,
    getItems,
    getItemApi,
    setItemsAPI
}
