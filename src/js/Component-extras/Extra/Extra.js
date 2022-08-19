import React, {useState} from "react"


export const Extra =({price, name, className, onAdd, currentExtra}) => {
    
    // const styleOnClick =(x) =>{
    //     return parseFloat(currentPrice) === price ? x : null
    // }

    // const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    const [styleBtn, setStyleBtn] = useState(false);

    const handleAddAddition =(event) => {

        if(typeof onAdd !== "function" ) {
            return
        }

        if (currentExtra === event.target.value) {
            onAdd(0);
            setStyleBtn(false);
        } else {
            setStyleBtn(true);
            onAdd(event.target.value);
        }
    }



    const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    return (
        <>
            <div>
                <button
                value={price}
                onClick={handleAddAddition}
                style={{
                    color: styleBtn ? "#fff901" : null, 
                    background: styleBtn ? "olivedrab" : null,
                    boxShadow: styleBtn ? boxShadowStyle : null
                    }}
                className={className}>{name} <br></br>{price} zł
                </button>
                {/* <span  className={ styleBtn ? "center label__checkbox__checked__extra" : "center label__checkbox"}>
                    <i className="fa fa-check icon"></i>
                </span> */}
            </div>
        </>
    )
}