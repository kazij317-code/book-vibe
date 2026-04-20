// // -------------------------------Start: 39_1 ---------------------------------------
// import { createBrowserRouter } from "react-router";
// import MainLayout from "../layout/MainLayout";
// import Books from "../pages/books/Books";
// import Homepage from "../pages/homepage/Homepage";

// // (12)st commit const router from main.jsx file and copy and paste from main.jsx file. createBrowserRouter+enter, <MainLayout+enter, <Homepage +enter, <Books +enter
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout/>, 
//     children: [
//       {
//         index: true,
//         element: <Homepage />
//       },
//       {
//         path: "/books",
//         element: <Books/>
//       },
//     ],
   
//   },
  
// ]);
// // (12)en then main.jsx file
// // -------------------------------End:39_1-(1) to (13) --------------------------------
// // -------------------------------Start: 39_2 ---------------------------------------

// import { createBrowserRouter } from "react-router";
// import MainLayout from "../layout/MainLayout";
// import Books from "../pages/books/Books";
// import Homepage from "../pages/homepage/Homepage";
// import ErrorPage from "../pages/ErrorPage/ErrorPage";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout/>, 
//     children: [
//       {
//         index: true,
//         element: <Homepage />
//       },
//       {
//         path: "/books",
//         element: <Books/>
//       },
//     ],
//     // (1)st
//     // errorElement: <h2>Page not found</h2>
//     // (1)en then create ErrorPage.jsx file creating ErrorPage folder in pages folder
//     // (4)st commit previous: then in ErrorPage. jsx file
//     errorElement: <ErrorPage/>
   
//   },
  
// ]);

// // -------------------------------End:39_2-(1) to (13) --------------------------------
// -------------------------------Start: 39_4 ---------------------------------------

import { createHashRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
// import { createHashRouter } from "react-router";


// export const router = createBrowserRouter([
export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout/>, 
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/books",
        element: <Books/>
      },
      // (1)st
      {
        path: "/bookDetails/:bookId",
        // (3) then in BookDetails.jsx
        // Component: BookDetails,
        element: <BookDetails/>,
        // (8) then in BookDetails.jsx
      // const booksPromise = fetch("/public/booksData.json").then((res) => res.json());
        // loader: () => fetch("/booksData.json"),
        loader: () => fetch(`${import.meta.env.BASE_URL}booksData.json`)
        // loader: () => fetch("/book-vibe/booksData.json"),

      }
        // (1)en then create bookDetails.jsx file creating BookDetails folder in pages folder 
    ],

    errorElement: <ErrorPage/>
   
  },
  
]);

// -------------------------------End:39_4-(1) to (13) --------------------------------
