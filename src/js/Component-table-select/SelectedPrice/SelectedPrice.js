

export const SelectedPrice =({price, title, min, onAdd, currentPrice, onShow}) => {
    
    const styleOnClick =(x) =>{
        return parseFloat(currentPrice) === price ? x : null
    }

    const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    const handleOnClick =(event)=> {
        onAdd(event.target.value)
        onShow(true)
    }

    return (
            <div>
                <button
                value={price}
                onClick={handleOnClick}
                style={{
                        backgroundColor: styleOnClick("purple"),
                        color: styleOnClick("yellow"),
                        transform: styleOnClick("none"),
                        boxShadow: styleOnClick(boxShadowStyle)
                    }}
                className={"price-btns"}> 
                {title}
                
                {/* {price} */}
                <br></br>
                {price} zł od dziecka
                {/* <h1 style={{lineHeight: "1px"}}> {price} zł</h1> */}
                {min}
                </button>
            </div>
    )
}