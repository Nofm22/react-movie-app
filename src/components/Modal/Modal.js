import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_INVISIBLE } from "../../redux/types/types";
import ReactDOM from "react-dom";

function Modal() {
    const { visible, ComponentContent } = useSelector(
        (state) => state.ModalReducers
    );
    
    const dispatch = useDispatch();
    return ReactDOM.createPortal(
        <>
            {visible && (
                <>
                    <div
                        className="fixed left-0 top-0 right-0 bottom-0 bg-sky-100"
                        style={{
                            backgroundColor: "rgba(9, 30, 66, 0.54)",
                            zIndex: 9,
                        }}
                        s
                        onClick={() => {
                            
                            dispatch({ type: SET_INVISIBLE });
                        }}
                    ></div>
                    <div
                        style={{ zIndex: 99 }}
                        className="max-w-[90%] w-[1000px] h-[90%] overflow-auto min-h-[900px] border-2 rounded-[5px] fixed left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] z-5"
                    >
                        {ComponentContent}
                    </div>
                </>
            )}
        </>,
        document.getElementById("modal")
    );
}

export default Modal;
