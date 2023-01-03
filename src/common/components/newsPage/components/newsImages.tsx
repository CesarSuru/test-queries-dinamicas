import React from "react";

const NewsImages = ({images}) => {
    return (
        <div className="h-[32rem] bg-black overflow-hidden">
            <img
                alt=""
                src={images}
                className="w-full h-full transition duration-1000 ease-linear align-middle bg-cover bg-center object-cover"
            />
        </div>
    );
}

export default NewsImages;