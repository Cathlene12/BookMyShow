import React from 'react';

function NavSm(){

}

function NavMd(){

}

function NavLg(){
    return<>
    <div className='container mx-auto px-4 items-center justify-between'>
        <div className='flex items-center w-1/2 gap-3'>
            <div className='w-10 h-10'>
                <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt='logo' className='w-full h-full' />
            </div>
            <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'></div>
        </div>
    </div>
    </>
}

const Navbar = () => {
    return <>
    <nav className="bg-darkBackground-700 px-4 py-3">
        <div className='md:hidden'>
            {/* {mobile screen} */}
            <NavSm />
        </div>
        <div className='hidden md:flex lg:hidden'>
            {/* {medium/tab screen} */}
            <NavMd />
        </div>
        <div className='hidden w-full lg:flex'>
            {/* {large screen} */}
            <NavLg />
        </div>
    </nav>
    </>
};

export default Navbar;