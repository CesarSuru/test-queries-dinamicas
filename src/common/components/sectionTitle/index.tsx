import React from "react";

import { SectionTitleProps } from "./types";

const SectionTitle = ({ title, description }: SectionTitleProps) => {
    return (
        <>
            <div className='lg:text-start text-center text-[#50D1E2] pb-4 px-12 w-full m-auto'>
                <h1
                    className='text-5xl font-Monserrat tracking-tight font-bold mt-0 mb-0'
                    data-aos='fade-right'
                    data-aos-duration='1000'
                    data-aos-once='false'
                >
                    {title}
                </h1>
                <p
                    className='lg:text-start text-center text-base mt-2 mb-2 font-light font-Monserrat leading-relaxed  text-gray-800'
                    data-aos='fade-right'
                    data-aos-duration='1500'
                    data-aos-once='false'
                >
                    Algunas noticias y <span className='font-bold'>notas de prensa</span>{" "}
                    de los últimos acontecimientos.
                </p>
            </div>

            <div className='lg:w-[1400px] m-auto'>
                <div className='bg-[#50D1E2] w-10 h-2 mx-12 border-t-none'></div>
                <div className='border-b-2 border-slate-300 mb-10'></div>
            </div>
        </>
    );
}

export default SectionTitle;