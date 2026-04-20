// // -------------------------------Start: 39_7 ---------------------------------------
// // (7)st
// import React, { useContext } from 'react';
// import { BookContext } from '../../context/BookContext';
// import BookCard from '../ui/BookCard';


// const ListedWishList = () => {

//     // return (
//     // <div>
//     //     Listed Wish List  
//     // </div>
//     // (12)st commit previous and copy from ListedReadList and modify
//     const { readList, wishList } = useContext(BookContext);
//     console.log(readList, wishList, "bookContext")

//     // (14)st
//     if (wishList.length === 0) {
//         return <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
//             <h2 className="font-bold text-3xl">No wishlist data found</h2>
//         </div>
//     }
//     // (14)en then in ListedReadList.jsx file

//     return (
//         <div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {
//                     // storedBooks.map((book, ind) => (<BookCard key={ind} book={book} />))
//                     //    (13)
//                     wishList.map((book, ind) => (<BookCard key={ind} book={book} />))

//                 }
//             </div>

//         </div>
//     );

//     // (12)en

// };

// export default ListedWishList;

// // (7)en then in Books.jsx file
// // -------------------------------End:39_7-(1) to (13) --------------------------------
// -------------------------------Start: 39_8 ---------------------------------------

import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';


// const ListedWishList = () => {
    // (20)
const ListedWishList = ({sortingType}) => {
    const { readList, wishList } = useContext(BookContext);
    console.log(readList, wishList, "bookContext")
    // (19)st copy from ListedReadList 
     const [filteredWishList, setFilteredWishList] = useState(wishList);
    
    
        useEffect(() => {
            if (sortingType) {
                if (sortingType === 'Pages') {
                
                    const sortedData = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
                    console.log(sortedData)
                   
                    setFilteredWishList(sortedData);
    
                } else if (sortingType === 'Rating') {
                 
                    const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
                    console.log(sortedData)
                    setFilteredWishList(sortedData);
                  
                }
            }
            // (15)storedBooks
        }, [sortingType, wishList])
     
    // (19)en

    // if (wishList.length === 0) {
    // (21)
    if (filteredWishList.length === 0) {
        return <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
            <h2 className="font-bold text-3xl">No wishlist data found</h2>
        </div>
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    // wishList.map((book, ind) => (<BookCard key={ind} book={book} />))
                    // (22)
                    filteredWishList.map((book, ind) => (<BookCard key={ind} book={book} />))
                }
            </div>
        </div>
    );

};

export default ListedWishList;


// -------------------------------End:39_8-(1) to (13) --------------------------------