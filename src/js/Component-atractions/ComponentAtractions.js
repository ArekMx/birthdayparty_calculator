import React, {useState, useEffect} from "react"
import Slider from 'react-smooth-range-input';
import Background from '../../images/wallpapper_gold_mobile_3.png'

export const ComponentAtractions =({onUp}) => {
    
    // const [{pigtails, setPigtails},
    //        {facePainting, setFacePainting},
    //        {tatoos, setTatoos},
    //        {baloons, setBaloons}
    //       ] = useState('');
          
    const [pigtails, setPigtails] = useState('');
    const [facePainting, setFacePainting] = useState(''); 
    const [tatoos, setTatoos] = useState(''); 
    const [baloons, setBaloons] = useState('');
    const [totalAtractions, setTotalAtractions] = useState('');       

    useEffect (() => {
        setTotalAtractions(pigtails*12 + facePainting*10 + tatoos*8 + baloons*4);
        
      }, [pigtails, facePainting, tatoos, baloons]);

    onUp(totalAtractions);


    // /// Slider min number

    // const [pigtailsMin, setPigtailsMin] = useState(0);


    //   const check =()=> {
    //       if (pigtails === 0) {
    //           setPigtailsMin(0)
    //       }
    //   }

    // useEffect (()=> {
    //     check();
    // }, [pigtails]);  

    
    const sectionBackgoundStyle = {
        backgroundSize: "cover",
        backgroundRepeat: "noRepeat",
        backgroundImage: `url(${Background})`
    }  

    return (
        <>
        <div style={sectionBackgoundStyle} className="atractions">
            <p className="sliders-title">Ustaw ilość dzieci, które skorzystają z poniższych atrakcji <br></br>(płatne od dziecka):</p>
            <div className="sliders">
            <div className="atractions-slider">
                <h1 className="atractions-title pigtails">Warkoczyki <br></br>12 zł </h1>
                <Slider value={0} min={0} max={30} onChange={(x) => setPigtails(x)} />
                {/* <button onClick={()=>{setPigtails(''); setPigtailsMin(0); console.log(pigtailsMin);}}>reset</button> */}
            </div>
            <div className="atractions-slider">
                <h1 className="atractions-title face-painting ">Malowanie twarzy<br></br>10 zł</h1>
                <Slider value={0} min={0} max={30} onChange={(x) => setFacePainting(x)} />
            </div>
            <div className="atractions-slider">
                <h1 className="atractions-title tatoos">Tatuaże <br></br>8 zł</h1>
                <Slider value={0} min={0} max={30} onChange={(x) => setTatoos(x)} />
            </div>
            <div className="atractions-slider">
                <h1 className="atractions-title baloons">Balonik modelowany <br></br>4 zł</h1>
                <Slider value={0} min={0} max={30} onChange={(x) => setBaloons(x)} />
            </div>
            </div>
            {/* <div className="total-atractions">
                <h1> Cena za atrakcje: {totalAtractions} zł</h1>
            </div>  */}
        </div> 
        </>
    )
}