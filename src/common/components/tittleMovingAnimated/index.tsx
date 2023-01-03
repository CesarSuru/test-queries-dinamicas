import React from "react";
import MovingComponent from "react-moving-text";

import { TittleMovingAnimateProps } from "./types";

const TittleMovingAnimated = ({tittleMainCarousel}:TittleMovingAnimateProps) =>{
    return (
        <h1 className="font-bold text-center lg:text-7xl text-5xl text-white font-Conthrax uppercase mb-4 lg:mx-24 mx-5">
            <MovingComponent
                type="slideInFromTop"
                duration="1700ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
            >
                {tittleMainCarousel}
            </MovingComponent>
        </h1>
    );
}

export default TittleMovingAnimated;
