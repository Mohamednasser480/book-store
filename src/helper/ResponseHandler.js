function getValidBook(response){
    for(const book of response){
        if(book.id && book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount &&
            book.volumeInfo && book.volumeInfo.authors && book.volumeInfo.title && book.volumeInfo.imageLinks&&
            book.volumeInfo.imageLinks.thumbnail && book.volumeInfo.description) return book;
    }
    return false;
}
function parseTheResponse(book){
    return {
        id: book.id,
        price: book.saleInfo.listPrice.amount,
        author: book.volumeInfo.authors[0],
        title: book.volumeInfo.title,
        img: book.volumeInfo.imageLinks.thumbnail,
        description: book.volumeInfo.description.substr(0, 500),
    }
}
export {
    getValidBook,
    parseTheResponse
}