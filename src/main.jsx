// // -------------------------------Start: 39_1 ---------------------------------------
// // (1)delete App.jsx and App.css file and configuration for tailwind css, daisyUI and react router 

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router'

// import MainLayout from './layout/MainLayout'
// import Homepage from './pages/homepage/Homepage'
// import Books from './pages/books/Books'
// import { router } from './routes/Routes'


// // (3)st
// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     // element: "Homepage"
// //     // (9)st commit previous and (5)
// //     element: <MainLayout />, //or, Component: MainLayout
// //     children: [
// //       {
// //         index: true,
// //         element: <Homepage />
// //       },
// //       {
// //         path: "/books",
// //         element: <Books/>
// //       },
// //     ],
// //     // (9)en then in Navbar.jsx file
// //   },
// //   // (5)st
// //   // {
// //   //   path: "/books",
// //   //   element: "books"
// //   // }
// //   // (5)en then create pages and components folder in src folder. created Homepage.jsx file creating homepage folder in pages folder
// // ]);
// // (3)en

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     {/* (2) commit App*/}

//     {/* <h2 className="bg-red-500">Hello</h2> */}
//     {/* (4) commit previous*/}
//     {/* <RouterProvider></RouterProvider> */}
//     {/* or */}
//     {/* (13) router+enter */}
//     <RouterProvider router={router} />
//   </StrictMode>,
// )

// // -------------------------------End:39_-(1) to (13) --------------------------------
// // -------------------------------Start: 39_5 ---------------------------------------

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router'
// import { router } from './routes/Routes'
// import BookProvider from './context/BookContext'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <RouterProvider router={router} /> */}
//     {/* (25)st commit previous */}
//     <BookProvider>
//         <RouterProvider router={router} />
//     </BookProvider>
//     {/* (25)en then in BookContext.jsx file*/}
//   </StrictMode>,
// )
// // -----------------------
// // Test:
// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import { createBrowserRouter, RouterProvider } from 'react-router'
// // import { router } from './routes/Routes'
// // import BookProvider from './context/BookContext'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //        <BookProvider>
// //         <RouterProvider router={router} />
// //     </BookProvider>
   
// //   </StrictMode>,
// // )
// // -------------------------------End:39_5-(1) to () --------------------------------
// -------------------------------Start: 39_6 ---------------------------------------

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { router } from './routes/Routes'
import BookProvider from './context/BookContext'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
        <RouterProvider router={router} />
        {/* (1) then in BookContext.jsx */}
        <ToastContainer />
        
    </BookProvider>
    
  </StrictMode>,
)

// -------------------------------End:39_6-(1) to () --------------------------------
