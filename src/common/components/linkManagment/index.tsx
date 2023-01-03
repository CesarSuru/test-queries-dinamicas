import React from 'react';
import LinkManagement from './components/linkImage';
import img3 from '../../../images/ENEE_Distribucion_b41101456a.png';
import img1 from '../../../images/ENEE_Generacion_1a23cbe71b.png';
import img2 from '../../../images/ENEE_Transmision_9515079a88.png';

const LinkSubsection = () => {
    const imgs = [img1, img2, img3];
    const images = imgs.map((element: any, index: number) => (
        <LinkManagement
            key={index}
            imagen={element}/>
    ));
    return (
        <>
            <div className="container md:px-36 mx-auto mt-5 lg:w-[1400px] m-auto">
                <section className="my-20 px-12 text-gray-800 text-center">
                    <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
                        {images}
                    </div>
                </section>
            </div>
        </>
    );
};

export default LinkSubsection;
