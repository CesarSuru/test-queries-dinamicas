import React from "react";
import { Props } from './types';
const TabsButton = ({tabsValue, tabName, isActive, onclick}:Props) => {
    return (
        <li className="nav-item" role="presentation">
            <a
                className={`TabsButtonClass nav-links ${isActive}`}
                id={`${tabsValue}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#${tabsValue}`}
                role="tab"
                aria-controls={tabsValue}
                aria-selected="true"
                onClick={() => onclick(tabsValue)}
            >
                {tabName}
            </a>
        </li>
    );
}

export default TabsButton;