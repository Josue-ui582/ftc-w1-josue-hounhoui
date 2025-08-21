import React from "react";

const CheckIn = () => {
    return(
        <section className="flex justify-center items-center mt-20">
            <div className="w-[60%] shadow-blue-300 shadow-sm rounded-lg p-8 flex gap-7 justify-center items-center">
                <div className="flex justify-center items-center flex-col gap-4 text-center">
                    <h1 className="text-3xl text-gray-100 font-bold">Our powerful analytics <br /> provides invaluable insights.</h1>
                    <p className="text-[13px] text-gray-300">Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement.</p>
                    <button className="rounded-2xl px-2 py-1 text-gray-400 border-1 cursor-pointer">Talk to an expert</button>
                </div>
            </div>
        </section>
    )
}

export default CheckIn;