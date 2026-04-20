// // -------------------------------Start: 39_3 ---------------------------------------
// // (20)st
// import React from 'react';
// // (24)then in AllBooks.jsx file
// import { CiStar } from 'react-icons/ci';
// // (22)const BookCard = ({book}) then in AllBooks.jsx file
// const BookCard = ({book}) => {
//     return (
//         // <div>

//         // </div>
//         // (21)st
//         <div className="card bg-base-100 shadow-sm">

//                                 <figure className="p-6">
//                                     <img

//                                         src={book.image}

//                                         alt={book.bookName} className="rounded-xl h-[250px]" />

//                                 </figure>
//                                 <div className="card-body">

//                                         <div className="flex items-center gap-2">
//                                         {
//                                             // (27) book.tags.map((tag, ind), <div key={ind}
//                                             book.tags.map((tag, ind) =>(<div key={ind} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>))
//                                         }
//                                         </div>

//                                         <h2 className="card-title text-2xl">{book.bookName}</h2>

//                                     <p className="font-semibold text-lg">By : {book.author}</p>


//                                     <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
//                                         <div className="font-semibold">{book.category}</div>

//                                         <div className="flex gap-2 items-center">{book.rating}<CiStar /></div>
//                                     </div>

//                                 </div>
//         </div>
//         // (21)en
//     );
// };

// export default BookCard;
// // (20)en
// // -------------------------------End:39_3-(1) to (13) --------------------------------
// -------------------------------Start: 39_4 ---------------------------------------
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        
        // <div className="card bg-base-100 shadow-sm">
        // (5) commit previous div convert to Link then in bookDetails.jsx file
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
            <figure className="p-6">
                <img
                    src={book.image}
                    alt={book.bookName} className="rounded-xl h-[250px]" />
            </figure>
            <div className="card-body">
                <div className="flex items-center gap-2">
                    {
                        book.tags.map((tag, ind) => (<div key={ind} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>))
                    }
                </div>
                <h2 className="card-title text-2xl">{book.bookName}</h2>
                <p className="font-semibold text-lg">By : {book.author}</p>
                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                    <div className="font-semibold">{book.category}</div>
                    <div className="flex gap-2 items-center">{book.rating}<CiStar /></div>
                    <div className="flex justify-between items-center gap-2">
                        <span>Number of pages: </span><span>{book.totalPages}</span>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </Link>

    );
};

export default BookCard;

// -------------------------------End:39_4-(1) to (13) --------------------------------