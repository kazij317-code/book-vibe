// // -------------------------------Start: 39_1 ---------------------------------------
// // (7)st
// import React from 'react';

// const Books = () => {
//     return (
//         <div>
//             Listed Books
//         </div>
//     );
// };

// export default Books;
// // (7)en then create Navbar.jsx file creating Navbar folder creating Shared folder in components folder.
// // -------------------------------End:39_1-(1) to (13) --------------------------------
// // -------------------------------Start: 39_5 ---------------------------------------
// import React, { useContext } from 'react';
// import { BookContext } from '../../context/BookContext';

// const Books = () => {
//     // // (31)st 
//     // const { handleMarkAsRead, storedBooks } = useContext(BookContext);
//     // console.log(handleMarkAsRead, storedBooks, "bookContext")
//     // // (31)en
//     // (32)st  commit (31) )
//     const { storedBooks } = useContext(BookContext);
//     console.log(storedBooks, "bookContext")
//     // (32)en then in BookContext.jsx file
//     return (
//         <div>
//             Listed Books
//         </div>
//     );
// };

// export default Books;
// // -------------------------------Start: 39_6 ---------------------------------------
// import React, { useContext } from 'react';
// import { BookContext } from '../../context/BookContext';

// const Books = () => {

//     // const { storedBooks } = useContext(BookContext);
//     // (12)
//     const { storedBooks, wishList } = useContext(BookContext);
//     // console.log(storedBooks, "bookContext")
//     // (13) commit previous
//     console.log(storedBooks, wishList, "bookContext")

//     return (
//         // <div>
//         //     Listed Books
//         // </div>
//         // (14)st commit previous
//         <div className ="container mx-auto">
//             Read List: {storedBooks.length} <br />
//             Wish List: {wishList.length}

//         </div>
//         // (14)en 

//     );
// };

// export default Books;

// // -------------------------------End:39_6-(1) to (13) --------------------------------
// // -------------------------------Start: 39_7 ---------------------------------------
// import React, { useContext } from 'react';
// import { BookContext } from '../../context/BookContext';

// // (1)st import from react-tabs
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import ListedReadList from '../../components/listedBooks/ListedReadList';
// import ListedWishList from '../../components/listedBooks/ListedWishList';
// // (1)en

// const Books = () => {
//     // const { storedBooks, wishList } = useContext(BookContext);
//     // console.log(storedBooks, wishList, "bookContext")

//     return (

//         // <div className="container mx-auto">
//         // (5)commit previous then create ListedReadList.jsx file creating listedBooks folder in components folder
//         <div className="container mx-auto my-3">
//             {/* Read List: {storedBooks.length} <br />
//             Wish List: {wishList.length} */}
//             {/* (2)st import from react-tabs*/}
//             <Tabs>
//                 <TabList>
//                     {/* <Tab>Title 1</Tab>
//                     <Tab>Title 2</Tab> */}
//                     {/* (3)st commit previous */}
//                     <Tab>Read List</Tab>
//                     <Tab>Wish List</Tab>
//                     {/* (3)en */}
//                 </TabList>

//                 {/* <TabPanel>
//                     <h2>Any content 1</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Any content 2</h2>
//                 </TabPanel> */}
//                 {/* (4)st commit previous*/}
//                 <TabPanel>
//                     {/* <h2>Read List: {storedBooks.length}</h2> */}
//                     {/* (8)commit previous */}
//                     <ListedReadList/>
//                 </TabPanel>
//                 <TabPanel>
//                     {/* <h2>Wish List: {wishList.length}</h2> */}
//                     {/* (9)commit previous then in ListedReadList.jsx file */}
//                     <ListedWishList/>
//                 </TabPanel>
//                 {/* (4)en */}
//             </Tabs>
//             {/* (2)en */}
//         </div>


//     );
// };
// export default Books;
// // -------------------------------End:39_7-(1) to (13) --------------------------------
// -------------------------------Start: 39_8 ---------------------------------------
import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';


const Books = () => {
    // (2)
    const [sortingType, setSortingType] = useState('');
    // (7)
    // console.log('sortingType', sortingType)
    return (

        <div className="container mx-auto my-3">
           
            {/* (4)st enter (1) to (4) */}
            <div className="flex justify-center my-3">
                 {/* (1)st from daisyUI: Dropdown / aligns to start of button horizontally */}
            <div className="dropdown dropdown-start">
                {/* <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div> */}
                {/* (18) then in ListedWishList.jsx file*/}
                <div tabIndex={0} role="button" className="btn m-1">Sort by: {sortingType} ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    {/* <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li> */}
                    {/* (3)st */}

                    {/* <li><a>Pages</a></li> */}
                    {/* (5)commit previous */}
                    <li onClick={()=>setSortingType('Pages')}><a>Pages</a></li>
                    {/* <li><a>Rating</a></li> */}
                    {/* (6)commit previous */}
                    <li onClick={()=>setSortingType('Rating')}><a>Rating</a></li>
                    {/* (3)st */}
                </ul>
            </div>
            {/* (1)en */}
            </div>
            {/* (4)en */}
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    {/* <ListedReadList /> */}
                    {/* (7) */}
                    <ListedReadList sortingType={sortingType} />
                </TabPanel>

                <TabPanel>
                    {/* <ListedWishList /> */}
                    {/* (8) then in ListedReadList.jsx file */}
                    <ListedWishList sortingType={sortingType} />
                </TabPanel>
            </Tabs>
        </div>


    );
};
export default Books;
// -------------------------------End:39_8-(1) to (13) --------------------------------