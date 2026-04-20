// -------------------------------Start: 39_2 ---------------------------------------
// (19)st
import React from 'react';
// (27)
import bookImg from '../../assets/book.png'

const Banner = () => {
    return (
        <div>
            {/* (20)st copy from daisyUI: Hero with figure but reverse order */}
            
            {/* <div className="hero bg-base-200 min-h-screen"> */}
                {/* (25)commit previous/ min-h-[70vh] rounded-2xl my-8 container mx-auto*/}
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
                {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
                    {/* (26)commit previous/w-full justify-between */}
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        // src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        // className="max-w-sm rounded-lg shadow-2xl"
                        // (28)commit previous then in Navbar.jsx file
                        src={bookImg}
                        className="max-w-sm rounded-lg shadow-2xl"

                    />
                    <div>
                        
                        {/* <h1 className="text-5xl font-bold">Box Office News!</h1> */}
                        {/* (22) commit previous*/}
                        <h1 className="text-5xl font-bold">Books to freshen up <br />your bookshelf</h1>
                        {/* (23)commit commit p */}
                        {/* <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p> */}
                        {/* <button className="btn btn-primary">Get Started</button> */}
                        {/* (24) commit previous  mt-4*/}
                        <button className="btn btn-success mt-4">View The List</button>
                    </div>
                </div>
            </div>

            {/* (20)en then in Homepage.jsx file */}

        </div>
    );
};

export default Banner;
// (19)en
// -------------------------------End:39_2-(1) to (13) --------------------------------