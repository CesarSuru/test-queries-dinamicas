import React from "react";
import NewsTabs from "../newsPage";

const TabDisplay = ({tabsValue, isActive, isShow, newsGridArray}:any) => {
    return (
        <div
            className={`tab-pane fade ${isActive} ${isShow}`}
            id={tabsValue}
            role="tabpanel"
            aria-labelledby={`${tabsValue}-tab`}
        >
            {/* Contenido del Tabs 1 */}
            <NewsTabs NewsGridArray={newsGridArray}/>
        </div>
    );
}

export default TabDisplay;