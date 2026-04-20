// // -------------------------------Start: 39_5 ---------------------------------------
// // (18)st
// import React, { createContext, useState } from 'react';
// // (19)
// export const BookContext = createContext();

// // const BookContext = () => {
//     // (20)st commit previous
//     // const BookProvider = () => {
//         // (22)
//     const BookProvider = ({children}) => {
//     // (20)en
//     // (23)st
//         // (28)st copy from BookDetails.jsx
//         const [storedBooks, setStoredBooks] = useState([]);

//             const handleMarkAsRead = (currentBook) => {

//                 const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);
//                 if(isExistBook){
//                     alert("The book is already exist")
//                 } else{

//                     setStoredBooks([...storedBooks, currentBook])
//                     // (33)
//                     alert(`${currentBook.bookName} is added to list`)
//                 }

//                 console.log(currentBook, storedBooks, "book")
//             };

//         // (28)en

//     const data = {
//         // test: "demo",
//         // // (27)
//         // age: 25,
//         // (29)st commit previous
//         storedBooks, setStoredBooks, handleMarkAsRead, 
//         // (29)en then in BookDetails.jsx file
//     }
//     // (23)en

//     // return 
//     // (
//     //     <div>

//     //     </div>
//     // );
//     // (21)st commit (<div> </div>);

//     // <BookContext.Provider>
//     // (24) st commit previous then in BookDetails.jsx file
//      return <BookContext.Provider value={data}>
//         {children}
//     </BookContext.Provider>
//         // (24f)en then in main.jsx file
// };
// // (18)en

// export default BookProvider;
// // ----------------------------------------
// // test:
// // import React, { createContext } from 'react';

// // export const BookContext = createContext();

// //     const BookProvider = ({children}) => {
// //     const data = {
// //         test: "demo"
// //     }

// //     return <BookContext.Provider value={data}>
// //         {children}
// //     </BookContext.Provider>

// // };


// // export default BookProvider;

// // -------------------------------End:39_5-(1) to (13) 
// // -------------------------------Start: 39_6 ---------------------------------------

// import React, { createContext, useState } from 'react';
// import { toast } from 'react-toastify';

// export const BookContext = createContext();
// const BookProvider = ({ children }) => {
//     const [storedBooks, setStoredBooks] = useState([]);
//     // (4)
//     const [wishList, setWishList] = useState([]);

//     const handleMarkAsRead = (currentBook) => {
//         const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);
//         if (isExistBook) {
//             // alert("The book is already exist")
//             // (2) commit previous from react toastify
//             toast.error("The book is already exist")

//         } else {
//             setStoredBooks([...storedBooks, currentBook])
//             // alert(`${currentBook.bookName} is added to list`)
//             // (3) commit previous
//             // toast.success(`${currentBook.bookName} is added to list`)
//             // (11) then Books.jsx file
//             toast.success(`${currentBook.bookName} is added to read list`);
//         }
//         console.log(currentBook, storedBooks, "book")
//     };
//     // (5)st
//     const handleWishList = (currentBook) => {
//         // (6)st
//         const isExistInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId);
        
//         if(isExistInReadList){
//             toast.error("This book is already in read list");
//             return;
//         }
//         // (6)en

//         const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);
//         if (isExistBook) {
//             toast.error("The book is already exist")

//         } else {
//             setWishList([...wishList, currentBook])
//             // toast.success(`${currentBook.bookName} is added to list`)
//             // (10)
//             toast.success(`${currentBook.bookName} is added to wish list`)
//         }
//         console.log(currentBook, storedBooks, "book")
//     };
//     // (5)en

//     const data = {
//         storedBooks, 
//         setStoredBooks, 
//         handleMarkAsRead,
//         // (7)st
//         wishList, 
//         setWishList,
//         handleWishList
//         // (7)en then in BookDetails.jsx file
//     };

//     return <BookContext.Provider value={data}>
//         {children}
//     </BookContext.Provider>

// };


// export default BookProvider;
// // -------------------------------End:39_6-(1) to (13) 
// -------------------------------Start: 39_9 ---------------------------------------

import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../utils/localDb';

export const BookContext = createContext();
const BookProvider = ({ children }) => {
    // const [storedBooks, setStoredBooks] = useState([]);
    // (13)commit previous and (2)
    const [storedBooks, setStoredBooks] = useState(() => getAllReadListFromLocalDB());
    // for wishList
    const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());

    // (2)st
    // useEffect(()=> {
    //     // getAllReadListFromLocalDB()
    //     // (4)st commit previous
    //     const getReadListFromLocalDB = getAllReadListFromLocalDB()
    //     console.log(getReadListFromLocalDB, "getReadListFromLocalDB");
    //     // (4)en then in localDb.jsx file
    //     // (12)
    //     setStoredBooks(getReadListFromLocalDB)
        
    // },[]);
    // (2)en then in localDb.jsx file

    

    const handleMarkAsRead = (currentBook) => {
        // (11)
        addReadListToLocalDB(currentBook)
        const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
          
            toast.error("The book is already exist")

        } else {
            setStoredBooks([...storedBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to read list`);
        }
        console.log(currentBook, storedBooks, "book")
    };
  
    const handleWishList = (currentBook) => {
        // for wishlist
        addWishListToLocalDB(currentBook)
       
        const isExistInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId);
        
        if(isExistInReadList){
            toast.error("This book is already in read list");
            return;
        }
     
        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error("The book is already exist")

        } else {
            setWishList([...wishList, currentBook])
           
            toast.success(`${currentBook.bookName} is added to wish list`)
        }
        console.log(currentBook, storedBooks, "book")
    };
   

    const data = {
        storedBooks, 
        setStoredBooks, 
        handleMarkAsRead,
        wishList, 
        setWishList,
        handleWishList
       
    };

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>

};

export default BookProvider;
// -------------------------------End:39_9-(1) to (13) 