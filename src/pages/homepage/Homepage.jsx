// // -------------------------------Start:39_1 --------------------------------

// // (6)st
// import React from 'react';

// const Homepage = () => {
//     return (
//         <div>
//             Homepage
//         </div>
//     );
// };

// export default Homepage;
// // (6)en then create Books.jsx file creating books folder in pages folder
// // -------------------------------End:39_1-(1) to (13) --------------------------------
// // -------------------------------Start:39_2 --------------------------------


// import React from 'react';
// import Banner from '../../components/homepage/Banner';
// import AllBooks from '../../components/AllBooks';

// const Homepage = () => {
//     return (
//         <div>
//             {/* Homepage */}
//             {/* (21)commit previous then in Banner.jsx file */}
//             <Banner/>

//         </div>
//     );
// };

// export default Homepage;

// // -------------------------------End:39_2-(1) to (13) --------------------------------
// // -------------------------------Start:39_3 --------------------------------
// import React from 'react';
// import Banner from '../../components/homepage/Banner';
// import AllBooks from '../../components/AllBooks';

// const Homepage = () => {
//     return (
//         <div>

//             <Banner/>
//             {/* (6) then in AllBooks.jsx file */}
//             <AllBooks/>

//         </div>
//     );
// };

// export default Homepage;
// // -------------------------------End:33_2-(1) to (13) --------------------------------
// -------------------------------Start:39_5 --------------------------------
import React, { useContext } from 'react';
import Banner from '../../components/homepage/Banner';
import AllBooks from '../../components/AllBooks';
import { BookContext } from '../../context/BookContext';

const Homepage = () => {
    // (26)st
    const bookContext = useContext(BookContext);
    // console.log(bookContext, "bookContext")
    // (26)en then in BookContext.jsx file
    return (
        <div>
 
            <Banner />
            <AllBooks />

        </div>
    );
};

export default Homepage;
// -------------------------------End:33_5-(1) to (13) --------------------------------

