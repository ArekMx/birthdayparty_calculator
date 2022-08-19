import React, {useState, useEffect} from "react"


export const ExtraBaloons =({price, name, className, onAdd, currentExtra}) => {
    

    const styleOnClick =(x) =>{
        return parseFloat(currentExtra) === price ? x : null
        
    }

    const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    const handleAddAddition =(event) => {

        if(typeof onAdd !== "function" ) {
            return
        }
        if (currentExtra === event.target.value) {
            onAdd(0);
        } else {
            onAdd(event.target.value);
        }
    }



    return (
            <div>
                <button
                value={price}
                onClick={handleAddAddition}
                style={{
                    backgroundColor: styleOnClick("#285ae4"),
                    color: styleOnClick("yellow"),
                    transform: styleOnClick("none"),
                    boxShadow: styleOnClick(boxShadowStyle)
                }}
                className={className}>{name} <br></br>{price}zł  
                </button>
                {/* <span  className="center label__checkbox__extrabaloons"
                        style={{
                            backgroundColor: (parseFloat(currentExtra) === price ? "#285ae4" : "white"),
                            border: (parseFloat(currentExtra) === price ? "4px solid #285ae4" : "5px solid rgba(0,0,0,0.1)"),
                            color: (parseFloat(currentExtra) === price ? "yellow" : "rgba(0,0,0,0.1)")
                        }}>
                    <i className="fa fa-check icon">
                    </i>
                </span> */}
            </div>
    )
}