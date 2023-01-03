import React from "react";

const ZoomHover = () => {
    return (
        <style
            dangerouslySetInnerHTML={{
                __html: "\n .zoom:hover img {\n transform: scale(1.1);\n }\n",
            }}
        />
    );
}

export default ZoomHover;