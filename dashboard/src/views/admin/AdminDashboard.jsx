import React from 'react';
import { MdCurrencyYen, MdOutlineShoppingCart } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { RiShoppingCartFill } from "react-icons/ri";

const AdminDashboard = () => {
    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5C5A5A]'>
                        <h2 className='font-bold text-3xl'>$3434</h2>
                        <span className='text-md font-medium'>Total sales</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#FF0305] flex justify-center
                    items-center text-xl'>
                        <MdCurrencyYen className='text-[white] shadow-lg'/>
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#FDE2FF] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5C5A5A]'>
                        <h2 className='font-bold text-3xl'>20</h2>
                        <span className='text-md font-medium'>Products</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#7E0080] flex justify-center
                    items-center text-xl'>
                        <MdOutlineShoppingCart className='text-[white] shadow-lg'/>
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#E9FEEA] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5C5A5A]'>
                        <h2 className='font-bold text-3xl'>50</h2>
                        <span className='text-md font-medium'>Sellers</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center
                    items-center text-xl'>
                        <HiUserGroup  className='text-[white] shadow-lg'/>
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#ECEBFF] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5C5A5A]'>
                        <h2 className='font-bold text-3xl'>$3434</h2>
                        <span className='text-md font-medium'>Orders</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#0200FD] flex justify-center
                    items-center text-xl'>
                        <RiShoppingCartFill className='text-[white] shadow-lg'/>
                    </div>
                </div>
            </div>

            <div className='w-full h-[300px] flex mt-7 bg-[#6A5FDF] rounded-xl'>

            </div>

        </div>
    );
};

export default AdminDashboard;