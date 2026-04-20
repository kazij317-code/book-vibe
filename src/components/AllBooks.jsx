// -------------------------------Start: 39_3 ---------------------------------------
// (2)st
import React, { use } from 'react';
// import { CiStar } from 'react-icons/ci';
import BookCard from './ui/BookCard';

// (3)
const booksPromise = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
    // (4)st
    const books = use(booksPromise)
    // console.log('books', books);
    // (4)en

    return (
        // (8)ClassName="my-12"
        <div ClassName="my-12">
            {/* (5) then in Homepage.jsx file*/}
            {/* (7) className="font-bold text-3xl text-center"*/}
            <h2 className="font-bold text-3xl text-center mb-6">Books</h2>
            
            {/* (19)st (9) inside div */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* (9)st */}
            {books.map((book, ind) => {

                    // return <h2>{book.bookName}</h2>
                    // (10) st commit previous and copy from daisyUI: Card with badge
                    return (
                    // <div className="card bg-base-100 shadow-sm">
                    //     {/* (17)className="p-6" */}
                    //     <figure className="p-6">
                    //         <img
                    //             // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    //             // alt="Shoes" />
                    //             // (11) commit previous
                    //             src={book.image}
                    //             // (18)  alt={book.bookName} className="rounded-xl h-[250px]"
                    //             alt={book.bookName} className="rounded-xl h-[250px]" />
                                
                    //     </figure>
                    //     <div className="card-body">
                    //         {/* <h2 className="card-title">
                    //             Card Title
                    //             <div className="badge badge-secondary">NEW</div>
                    //         </h2> */}

                    //         {/* (12)st commit previous h2*/}
                    //             {/* <div className="badge badge-secondary">NEW</div> */}
                    //             {/* (14) st commit previous */}
                    //             <div className="flex items-center gap-2">
                    //             {
                    //                 book.tags.map((tag) =>(<div className="badge text-green-500 bg-green-100 font-bold">{tag}</div>))
                    //             }
                    //             </div>
                    //             {/* (14) en */}
                    //             <h2 className="card-title text-2xl">{book.bookName}</h2>
                    //         {/* (12)en*/}

                    //         {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                    //         {/* (13)commit previous p */}
                    //         <p className="font-semibold text-lg">By : {book.author}</p>

                    //         {/* <div className="card-actions justify-end">
                    //             <div className="badge badge-outline">Fashion</div>
                    //             <div className="badge badge-outline">Products</div>
                    //         </div> */}
                    //         {/* (15)st commit previous */}
                    //         <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                    //             <div className="font-semibold">{book.category}</div>
                    //             {/* (16)from react icon ci/CiStar */}
                    //             <div className="flex gap-2 items-center">{book.rating}<CiStar /></div>
                    //         </div>
                    //         {/* (15)en */}
                    //     </div>
                    // </div>
                    // (23) then in BookCard.jsx file
                    // (25)key={ind}
                    <BookCard key={ind} book={book}/>
                    );
                    // (10) en
                })}
            {/* (9)en */}

            </div>

            {/* (19)en  then create BookCard.jsx creating ui folder in components folder and cut contents after return*/}

        </div>
    );
};

export default AllBooks;
// (2)en
// -------------------------------End:39_3-(1) to (13) --------------------------------