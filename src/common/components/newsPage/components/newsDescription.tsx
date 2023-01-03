import React from "react";

const NewsDescription = ({description}) => {
    return (
        <p className="text-sm font-Monserrat text-white m-6 mt-8">
            {description}
        </p>
    );
}

export default NewsDescription;