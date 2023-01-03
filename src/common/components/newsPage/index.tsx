import React from "react";
import NewsImages from "./components/newsImages";
import ZoomHover from "./components/zoomHover";
import DateNews from "./components/dateNews";
import TittleNews from "./components/tittleNews";
import NewsDescription from "./components/newsDescription";
import Overlay from "./components/overlay";
import "./styles/index.css";
import { DataProps } from "./types"

const NewsTabs = ({gridData}:DataProps) => {
    return (
        <>
            <div className="my-5 px-16 mx-auto lg:w-[1400px] m-auto">
                <section className="mb-32 text-gray-800">
                    <ZoomHover />
                    <div className="grid lg:grid-cols-4 gap-6">
                        {gridData.map((newsGrid:any) => {
                            return (
                                <>
                                    <div
                                        className="zoom shadow-lg relative overflow-hidden bg-no-repeat"
                                        data-aos="fade-up"
                                        data-aos-duration={[]}
                                        data-aos-once="false"
                                        key={newsGrid.id}
                                    >
                                        <NewsImages
                                            NewsImages={newsGrid.imageLink}
                                        />
                                        <div
                                            className="NewsContainerGrid"
                                            style={{backgroundColor: "rgba(0, 0, 0, 0.0)"}}
                                        >
                                            <div className="flex justify-start items-end h-full">
                                                <div className="bg-black w-full bg-opacity-60">
                                                    <TittleNews tittle={newsGrid.tittleNews} />
                                                    <DateNews date={newsGrid.dateNews} />
                                                    <NewsDescription
                                                        description={newsGrid.newsDescription}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <Overlay />
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    );
}

export default NewsTabs;