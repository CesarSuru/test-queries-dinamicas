import React from "react";
import { InfoDetailProps } from "./types";

const TitleInfoDetailsContent = ({title, description}: InfoDetailProps) => {
    return(
        <>
            <div>
                <h5>
                    {title}
                </h5>
                <p>
                    {description}
                </p>
            </div>
        </>
    );
}

export default TitleInfoDetailsContent;