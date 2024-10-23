import React from 'react'; 

const OrderDetails = () => { 
    return (
        <section className="h-full bg-gradient-to-b from-gray-200 to-gray-300">
            <div className="container py-5 h-full">
                <div className="flex justify-center items-center h-full">
                <div className="lg:w-5/6 xl:w-2/3">
                    <div className="bg-white shadow rounded-lg">
                    <div className="px-6 py-5 bg-gray-100 rounded-t-lg">
                        <h5 className="text-gray-500 mb-0">Thanks for your Order, <span className="text-pink-500">Anna</span>!</h5>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                        <p className="text-pink-500 font-normal mb-0">Receipt</p>
                        <p className="text-xs text-gray-500 mb-0">Receipt Voucher : 1KAU9-84UIL</p>
                        </div>

                        <div className="bg-white shadow-sm border mb-4">
                        <div className="p-4">
                            <div className="flex">
                            <div className="w-1/6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                                className="w-full h-auto" alt="Phone" />
                            </div>
                            <div className="w-1/6 flex justify-center items-center">
                                <p className="text-gray-500 mb-0">Samsung Galaxy</p>
                            </div>
                            <div className="w-1/6 flex justify-center items-center">
                                <p className="text-gray-500 text-xs mb-0">White</p>
                            </div>
                            <div className="w-1/6 flex justify-center items-center">
                                <p className="text-gray-500 text-xs mb-0">Capacity: 64GB</p>
                            </div>
                            <div className="w-1/6 flex justify-center items-center">
                                <p className="text-gray-500 text-xs mb-0">Qty: 1</p>
                            </div>
                            <div className="w-1/6 flex justify-center items-center">
                                <p className="text-gray-500 text-xs mb-0">$499</p>
                            </div>
                            </div>
                            <hr className="my-4 bg-gray-300 opacity-100"/>
                            <div className="flex items-center">
                            <div className="w-1/6">
                                <p className="text-gray-500 text-xs mb-0">Track Order</p>
                            </div>
                            <div className="w-5/6">
                                <div classNameName="w-full bg-gray-200 rounded-full h-1.5">
                                <div className="bg-pink-500 h-1.5 rounded-full w-[65%]"></div>
                                </div>
                                <div className="flex justify-around mt-1">
                                <p className="text-gray-500 text-xs">Out for delivery</p>
                                <p className="text-gray-500 text-xs">Delivered</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="bg-white shadow-sm border mb-4">
                        <div className="p-4">
                            <div className="flex">
                            <div className="w-1/6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                                className="w-full h-auto" alt="Phone"/>
                            </div>
                            <div className="w-1/6 flex justify-center items-center">
                                <p className="text-gray-500 mb-0">iPad</p>
                            </div>
                            <div className="w-1/6 flex justify-center items-center">
                                <p className="text-gray-500 text-xs mb-0">Pink rose</p>
                            </div>
                            <div className="w-1/6 flex justify-center items-center">
                                <p className="text-gray-500 text-xs mb-0">Capacity: 32GB</p>
                            </div>
                            <div className="w-1/6 flex justify-center items-center">
                                <p className="text-gray-500 text-xs mb-0">Qty: 1</p>
                            </div>
                            <div className="w-1/6 flex justify-center items-center">
                                <p className="text-gray-500 text-xs mb-0">$399</p>
                            </div>
                            </div>
                            <hr className="my-4 bg-gray-300 opacity-100"/>
                            <div className="flex items-center">
                            <div className="w-1/6">
                                <p className="text-gray-500 text-xs mb-0">Track Order</p>
                            </div>
                            <div className="w-5/6">
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div className="bg-pink-500 h-1.5 rounded-full w-[20%]"></div>
                                </div>
                                <div className="flex justify-around mt-1">
                                <p className="text-gray-500 text-xs">Out for delivery</p>
                                <p className="text-gray-500 text-xs">Delivered</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="flex justify-between pt-2">
                        <p className="font-bold mb-0">Order Details</p>
                        <p className="text-gray-500 mb-0"><span className="font-bold mr-4">Total</span> $898.00</p>
                        </div>

                        <div className="flex justify-between pt-2">
                        <p className="text-gray-500 mb-0">Invoice Number : 788152</p>
                        <p className="text-gray-500 mb-0"><span className="font-bold mr-4">Discount</span> $19.00</p>
                        </div>

                        <div className="flex justify-between">
                        <p className="text-gray-500 mb-0">Invoice Date : 22 Dec,2019</p>
                        <p className="text-gray-500 mb-0"><span className="font-bold mr-4">GST 18%</span> 123</p>
                        </div>

                        <div className="flex justify-between mb-5">
                        <p className="text-gray-500 mb-0">Receipts Voucher : 18KU-62IIK</p>
                        <p className="text-gray-500 mb-0"><span className="font-bold mr-4">Delivery Charges</span> Free</p>
                        </div>
                    </div>
                    <div className="px-6 py-5 bg-pink-500 rounded-b-lg">
                        <h5 className="flex items-center justify-end text-white uppercase mb-0">Total paid: <span
                            className="text-2xl ml-2">$1040</span></h5>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    ); 
}; 

export default OrderDetails;