import React from "react";

const NewsDecription = ({newsDescriptionProps}: any) => {
    return (
        <p className="text-sm font-Monserrat text-white m-6 mt-8">
            {newsDescriptionProps}
        </p>
    );
}

export default NewsDecription;