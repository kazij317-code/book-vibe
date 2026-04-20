// // -------------------------------Start: 39_4 ---------------------------------------
// // (2)st
// import React, { use } from 'react';
// import { useLoaderData, useParams } from 'react-router';
// // (6)copy from AllBooks.jsx
// // const booksPromise = fetch("/public/booksData.json").then((res) => res.json());



// const BookDetails = () => {
//     // (4)st
//     // const params = useParams()
//     // console.log('params', params);
//     // (4)en then in BookCard.jsx file
//     // (10)st commit previous
//     // const { bookId } = useParams()
//     // (16) commit previous
//     const { bookId: bookParamsId } = useParams()
//     // console.log('bookId', typeof bookId);
//     // (17)commit previous
//     console.log('bookId', typeof bookParamsId);
//     // (10)en
//     // (7)st  copy from AllBooks.jsx
//     // const books = use(booksPromise)
//     // (9)st
//     const books = useLoaderData();
//     // (9)en
//     console.log('books', books);
//     // (11)st
//     // const expectedBook = books.find(book => book.bookId === Number(bookId));//or === parseInt(bookId) or Number(bookId)
//     // (18)commit previous
//     const expectedBook = books.find(book => book.bookId === Number(bookParamsId));//or === parseInt(bookId) or Number(bookId)
//     console.log('expectedBook', expectedBook)
//     // (14)
//     const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;
//     // (11)en
//     // (7)en then in Routes.jsx file 

//     return (

//         // <div>
//         //     boooookkkkkkk
//         // </div>
//         // (12)st card from daisyUI:Responsive card (vertical on small screen, horizontal on large screen)
//         <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
//             <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
//                 {/* <img
//                     src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
//                     alt="Album" /> */}
//                 {/* (13)st */}
//                 <img
//                     src={image}
//                     alt="Album" className="h-110" />
//                 {/* (13)en */}
//             </figure>
//             <div className="card-body space-y-3">
//                 {/* <h2 className="card-title">New album is released!</h2> */}
//                 {/* (14)st commit previous */}
//                 <h2 className="card-title text-2xl">{bookName}</h2>
//                 <h2 className="card-title">By: {author}</h2>
//                 {/* (14)en */}
//                 {/* <p>Click the button to listen on Spotiwhy app.</p> */}
//                 {/* (15) st commit previous*/}
//                 <p className="py-2 border-y">{category}</p>
//                 <p>Review: {review}</p>
//                 <div className="flex items-center gap-2">
//                    tag: {
//                         tags.map((tag, ind) => (<div key={ind} className="badge text-green-500 bg-green-100 font-bold"> #{tag}</div>))
//                     }
//                 </div>
//                 {/* (15)en */}
//                 {/* (17)st */}
//                 <div className="border-t space-y-3">
//                     <div className="flex justify-between items-center gap-2">
//                         <span>Number of pages: </span><span>{totalPages}</span>
//                     </div>
                    
//                     <div className="flex justify-between items-center gap-2">
//                         <span>publisher: </span><span>{publisher}</span>
//                     </div>

//                     <div className="flex justify-between items-center gap-2">
//                         <span>Publish time: </span><span>{yearOfPublishing}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <button className="btn">Mark as Read</button>
//                         <button className="btn btn-primary">Add to Wishlist</button>
//                     </div>
                    
//                 {/* (17)en */}
//                 </div>
//             </div>
//         </div>

//         // (12)en
//     );
// };

// export default BookDetails;

// // (2)en then in Routes.jsx  file
// // -------------------------------End:39_4-(1) to (13) --------------------------------
// // -------------------------------Start: 39_5 ---------------------------------------

// import React, { useContext, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import { BookContext } from '../../context/BookContext';

// const BookDetails = () => {
    
//     const { bookId: bookParamsId } = useParams()
//     // console.log('bookId', typeof bookParamsId);
  
//     const books = useLoaderData();
//     // console.log('books', books);
    
    
//     const expectedBook = books.find(book => book.bookId === Number(bookParamsId));//or === parseInt
//     // console.log('expectedBook', expectedBook)
    
//     const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;

//     // (25)st
//     const bookContext = useContext(BookContext);
//     console.log(bookContext, "bookContext")
//     // (25)en it also test in Homepage.jsx file
//     // (30)st commit (25)
//     const {handleMarkAsRead, storedBooks} = useContext(BookContext);
//     // console.log(handleMarkAsRead, storedBooks, "bookContext")
//     // (30)en then copy it to Books.jsx file

//     // (2)
//     // const [storedBooks, setStoredBooks] = useState([]);
//     // // (1)st
//     // // const handleMarkAsRead = () => {
//     // // (3)
//     // // const handleMarkAsRead = (id) => {
//     //     // (5)
//     // // const handleMarkAsRead = (bookId) => {
//     //     // (8)
//     // // const handleMarkAsRead = (book) => {
//     //     // (11)
//     // const handleMarkAsRead = (currentBook) => {
//     //     // step 1: store book id or store book object
//     //     // step 2: where to store
//     //     // step 3: array or collection
//     //     // step 4: If the book is already exist then show a alert or toast
//     //     // step 5: If not then add the book in the array or collection
//     //     // (6)
//     //     // console.log(bookId, 'bookId')
//     //     // (9)
//     //     // console.log(book, 'bookId')
//     //     // (12)
//     //     // console.log(currentBook, 'bookId')
//     //     // (16)
//     //     // console.log(currentBook, 'book')
//     //     // (7)st
//     //     // const isExistBook = storedBooks.find((book) => book.bookId === bookId);
//     //     // (10)
//     //     // const isExistBook = storedBooks.find((book) => book.bookId === book);
//     //     // (13)
//     //     const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);
//     //     if(isExistBook){
//     //         alert("The book is already exist")
//     //     } else{
//     //         // setStoredBooks([...storedBooks, book])
//     //         // (14)
//     //         setStoredBooks([...storedBooks, currentBook])
//     //     }
//     //     // (7)en
//     //     // (17)commit (16) then create BookContext.jsx file creating context folder in src folder
//     //     console.log(currentBook, storedBooks, "book")
//     // };
//     //(1)en
//     return (

       
//         <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
//             <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
               
//                 <img
//                     src={image}
//                     alt="Album" className="h-110" />
              
//             </figure>
//             <div className="card-body space-y-3">
               
//                 <h2 className="card-title text-2xl">{bookName}</h2>
//                 <h2 className="card-title">By: {author}</h2>
               
//                 <p className="py-2 border-y">{category}</p>
//                 <p>Review: {review}</p>
//                 <div className="flex items-center gap-2">
//                    tag: {
//                         tags.map((tag, ind) => (<div key={ind} className="badge text-green-500 bg-green-100 font-bold"> #{tag}</div>))
//                     }
//                 </div>
              
//                 <div className="border-t space-y-3">
//                     <div className="flex justify-between items-center gap-2">
//                         <span>Number of pages: </span><span>{totalPages}</span>
//                     </div>
                    
//                     <div className="flex justify-between items-center gap-2">
//                         <span>publisher: </span><span>{publisher}</span>
//                     </div>

//                     <div className="flex justify-between items-center gap-2">
//                         <span>Publish time: </span><span>{yearOfPublishing}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         {/* (4) */}
//                         {/* <button className="btn" onClick={() => handleMarkAsRead(bookId)}>Mark as Read</button> */}
//                         {/* (15)st */}
//                         <button className="btn" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
//                         {/* (15)en */}
//                         <button className="btn btn-primary">Add to Wishlist</button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default BookDetails;

// // -------------------------------End:39_5-(1) to (13) --------------------------------
// -------------------------------Start: 39_6 ---------------------------------------

import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { BookContext } from '../../context/BookContext';

const BookDetails = () => {
    
    const { bookId: bookParamsId } = useParams()
    // console.log('bookId', typeof bookParamsId);
  
    // const books = useLoaderData();
    const books = useLoaderData() || [];
    // console.log('books', books);
    
    
    const expectedBook = books.find(book => book.bookId === Number(bookParamsId));//or === parseInt
    // console.log('expectedBook', expectedBook)
    
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;

    const bookContext = useContext(BookContext);
    // console.log(bookContext, "bookContext")
    
    // const {handleMarkAsRead, storedBooks} = useContext(BookContext);
    // (9) then in BookContext.jsx
    const {handleMarkAsRead, handleWishList} = useContext(BookContext);
    
    return (
   
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
            <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
               
                <img
                    src={image}
                    alt="Album" className="h-110" />
              
            </figure>
            <div className="card-body space-y-3">
               
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">By: {author}</h2>
               
                <p className="py-2 border-y">{category}</p>
                <p>Review: {review}</p>
                <div className="flex items-center gap-2">
                   tag: {
                        tags.map((tag, ind) => (<div key={ind} className="badge text-green-500 bg-green-100 font-bold"> #{tag}</div>))
                    }
                </div>
              
                <div className="border-t space-y-3">
                    <div className="flex justify-between items-center gap-2">
                        <span>Number of pages: </span><span>{totalPages}</span>
                    </div>
                    
                    <div className="flex justify-between items-center gap-2">
                        <span>publisher: </span><span>{publisher}</span>
                    </div>

                    <div className="flex justify-between items-center gap-2">
                        <span>Publish time: </span><span>{yearOfPublishing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       
                        <button className="btn" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
                       
                        {/* <button className="btn btn-primary">Add to Wishlist</button> */}
                        {/* (8) */}
                        <button className="btn btn-primary"onClick={()=> handleWishList(expectedBook)}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookDetails;
// -------------------------------End:39_6-(1) to (13) --------------------------------
