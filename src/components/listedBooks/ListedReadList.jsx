// // -------------------------------Start: 39_7 ---------------------------------------
// // (6)st
// import React, { useContext } from 'react';
// import { BookContext } from '../../context/BookContext';
// import BookCard from '../ui/BookCard';


// const ListedReadList = () => {
//     // (10)st from Books.jsx file
//     const { storedBooks, wishList } = useContext(BookContext);
//     console.log(storedBooks, wishList, "bookContext")
//     // (10)en
//     // (15)st copy from ListedWishList.jsx file
//     if (storedBooks.length === 0) {
//         return <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
//             <h2 className="font-bold text-3xl">No Read list data found</h2>
//         </div>
//     }
//     // (15)en then in BookContext.jsx
//     return (
//         <div>
//             {/* Listed Read List */}
//             {/* (11) st commit previous */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {
//                     storedBooks.map((book, ind) => (<BookCard key={ind} book={book} />))
//                 }
//             </div>
//             {/* (11) en then in ListedWishList.jsx file */}
//         </div>
//     );
// };

// export default ListedReadList;

// // (6)en then create ListedWishList.jsx file in listedBooks folder
// // -------------------------------End:39_7-(1) to (13) --------------------------------
// -------------------------------Start: 39_8 ---------------------------------------

import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';


// const ListedReadList = () => {
// (9) then in ListedWishList
const ListedReadList = ({ sortingType }) => {
    //readList
    const { storedBooks, wishList } = useContext(BookContext);
    //readList
    console.log(storedBooks, wishList, "bookContext");
    // (11)
    const [filteredReadList, setFilteredReadList] = useState(storedBooks);

    // (10)st
    useEffect(() => {
        if (sortingType) {
            if (sortingType === 'Pages') {
                // (14)st
                const sortedData = [...storedBooks].sort((a, b) => a.totalPages - b.totalPages);
                console.log(sortedData)
                // (14)en
                // (16)
                setFilteredReadList(sortedData);

            } else if (sortingType === 'Rating') {
                // (17)st
                const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
                console.log(sortedData)
                setFilteredReadList(sortedData);
                // (17)en then in Book.jsx file

            }
        }
        // (15)storedBooks
    }, [sortingType, storedBooks])
    // (10)en

    // if (storedBooks.length === 0) {
    // (12)
    if (filteredReadList.length === 0) {
        return <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
            <h2 className="font-bold text-3xl">No Read list data found</h2>
        </div>
    }

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    // storedBooks.map((book, ind) => (<BookCard key={ind} book={book} />))
                    // (13)
                    filteredReadList.map((book, ind) => (<BookCard key={ind} book={book} />))
                }
            </div>

        </div>
    );
};

export default ListedReadList;

// -------------------------------End:39_8-(1) to (13) --------------------------------