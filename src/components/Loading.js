import React from "react";
import { useSelector } from "react-redux";
function Loading() {
    const { isLoading } = useSelector((state) => state.LoadingReducers);
    return (
        <>
            {isLoading && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-body-bg bg-center bg-cover" style={{zIndex:999}}>
                    <div className=" text-text-color flex items-center justify-center h-[100%]">
                        <img src="/Image/rolling.gif" className="w-16 h-16" />
                    </div>
                </div>
            )}
        </>
    );
}

export default Loading;
