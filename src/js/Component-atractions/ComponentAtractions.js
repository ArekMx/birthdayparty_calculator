import React, {useState, useEffect} from "react"
import Slider from 'react-smooth-range-input';
import Background from '../../images/wallpapper_gold_mobile_3.png'

export const ComponentAtractions =({onUp}) => {
    
    // const [{pigtails, setPigtails},
    //        {facePainting, setFacePainting},
    //        {tatoos, setTatoos},
    //        {baloons, setBaloons}
    //       ] = useState('');

    const atraction = {
        pigtails: {
            price: 12,
            title: "Warkoczyki",
        },
        facePainting: {
            price: 12,
            title: "Malowanie twarzy",
        },
        tatoos: {
            price: 10,
            title: "Tatuaże"
        },
        baloons: {
            price: 5,
            title: "Modelowanie balonów"
        }
    }


          
    const [pigtails, setPigtails] = useState('');
    const [facePainting, setFacePainting] = useState(''); 
    const [tatoos, setTatoos] = useState(''); 
    const [baloons, setBaloons] = useState('');
    const [totalAtractions, setTotalAtractions] = useState('');       

    useEffect (() => {
        setTotalAtractions(pigtails*atraction.pigtails.price + 
                           facePainting*atraction.facePainting.price + 
                           tatoos*atraction.tatoos.price + 
                           baloons*atraction.baloons.price);
        
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
                <h1 className="atractions-title pigtails">{atraction.pigtails.title} <br></br>{atraction.pigtails.price} zł</h1>
                <Slider value={0} min={0} max={30} onChange={(x) => setPigtails(x)} />
                {/* <button onClick={()=>{setPigtails(''); setPigtailsMin(0); console.log(pigtailsMin);}}>reset</button> */}
            </div>
            <div className="atractions-slider">
                <h1 className="atractions-title face-painting ">{atraction.facePainting.title}<br></br>{atraction.facePainting.price zł</h1>
                <Slider value={0} min={0} max={30} onChange={(x) => setFacePainting(x)} />
            </div>
            <div className="atractions-slider">
                <h1 className="atractions-title tatoos">{atraction.tatoos.title} <br></br>{atraction.tatoos.price} zł</h1>
                <Slider value={0} min={0} max={30} onChange={(x) => setTatoos(x)} />
            </div>
            <div className="atractions-slider">
                <h1 className="atractions-title baloons">{atraction.baloons.title} <br></br>{atraction.baloons.price} zł</h1>
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