// -------------------------------Start: 39_9 ---------------------------------------

// For ReadList:

// (1)st
const getAllReadListFromLocalDB = () =>{
    const allReadList = localStorage.getItem('storedBooks');
    console.log(allReadList, 'ReadList from local DB');
    // (3) then in BookContext.jsx file
    // if(allReadList) return allReadList;
    // (8)
    if(allReadList) return JSON.parse(allReadList);
    return [];
}

// const addReadListToLocalDB = () =>{
    // (6)
const addReadListToLocalDB = (book) =>{
    // (5)st
    const allBooks = getAllReadListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId)
    // (5)en
    // (7)st
    // if(isAlreadyExist){

    // } else {
    //     // Ei data ta local db te add korte hobe
    //     allBooks.push(book)
    //     // (9)
    //     localStorage.setItem("storedBooks", JSON.stringify(allBooks))
    // }
    // (7)en
    // (10)st commit (7)
    if(!isAlreadyExist){
        allBooks.push(book);
        localStorage.setItem("storedBooks", JSON.stringify(allBooks))
    }
    // (10)en then in BookContext.jsx file

}
export{getAllReadListFromLocalDB, addReadListToLocalDB};
// (1)en then in BookContext.jsx file
// --------------------------------------------------------------
// For WishList:

const getAllWishListFromLocalDB = () =>{
    const allWishList = localStorage.getItem('wishList');
    console.log(allWishList, 'WishList from local DB');
   
    if(allWishList) return JSON.parse(allWishList);
    return [];
}

const addWishListToLocalDB = (book) =>{
   
    const allBooks = getAllWishListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId)
    
    if(!isAlreadyExist){
        allBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allBooks))
    }
   
}
export{getAllWishListFromLocalDB, addWishListToLocalDB};

// -------------------------------End:39_9-(1) to (13) --------------------------------