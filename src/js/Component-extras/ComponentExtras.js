import { Extra } from './Extra/Extra'
import { ExtraBaloons } from './Extra-baloons/ExtraBaloons';
import React, {useState, useEffect} from "react"

export const ComponentExtras =({onAddTotalExtras, onAddTableware}) => {
    

    const extra = {
        assistant: {
            price: 100,
            title: "Asystent urodzin",
        },
        bouquet: {
            1: {
                price: 30,
                balloon: "1 bukiet",
            },
            2: {
                price: 50,
                balloon: "2 bukiety",
            },
            3: {
                price: 70,
                balloon: "3 bukiety",
            },
        },
        numberBaloon: {
            price: 30,
            title: "Balon cyfra na powietrze (szt.)",
        },
        piñata: {
            price: 100,
            title: "Piniata"
        },
        ekoTableware: {
            price: 2,
            title: "Zastawa eko (szt.)"
        }

    }

    const [extraPriceAssistant, setExtraPriceAssistant] = useState('');
    const [extraNumBaloon, setExtraNumBaloon] = useState('');
    const [extraPriceBaloons, setExtraPriceBaloons] = useState('');
    const [extraPricePinata, setExtraPricePinata] = useState('');
    const [extraPriceEkoTableware, setExtraPriceEkoTableware] = useState('');
    
    const [totalExtras, setTotalExtras] = useState('');

    useEffect (()=> {

        setTotalExtras(Number(extraPriceAssistant) + Number(extraNumBaloon) + Number(extraPriceBaloons) + Number(extraPricePinata));

    },[extraPriceAssistant, extraNumBaloon, extraPriceBaloons, extraPricePinata, extraPriceEkoTableware]);

    onAddTotalExtras(totalExtras);
    onAddTableware(extraPriceEkoTableware);

    return (
            <>
                <div>
                    <p className="extras-title">Wybierz extra dodatki:</p>
                </div>
                <div className={"assistant"}>
                    <Extra price={extra.assistant.price} name={extra.assistant.title} className="btn-assistant" onAdd={x=>setExtraPriceAssistant(x)} currentExtra={extraPriceAssistant}/>
                </div>
               
                <div className={"numberBaloon"}>
                    <Extra price={extra.numberBaloon.price} name={extra.numberBaloon.title} className="btn-number" onAdd={x=>setExtraNumBaloon(x)} currentExtra={extraNumBaloon}/>
                </div>
                {/* <div className={"piniata"}>
                    <Extra price={extra.piñata.price} name={extra.piñata.title} className="btn-number" onAdd={x=>setExtraPricePinata(x)} currentExtra={extraPricePinata}/>
                </div> */}
                <div className={"ekoTableware"}>
                    <Extra price={extra.ekoTableware.price} name={extra.ekoTableware.title} className="btn-number" onAdd={x=>setExtraPriceEkoTableware(x)} currentExtra={extraPriceEkoTableware}/>
                </div>
                <div className="bouquet">
                    <p className={"bouquet-title"}>Bukiety balonowe</p>
                    <div className={"bouquet-btns"}>
                        <div className="btn-bouquet">
                            <ExtraBaloons price={extra.bouquet[1].price} name={extra.bouquet[1].balloon} className="btn-baloons" onAdd={x=>setExtraPriceBaloons(x)} currentExtra={extraPriceBaloons}/>
                        </div>
                        <div className="btn-bouquet">
                            <ExtraBaloons price={extra.bouquet[2].price} name={extra.bouquet[2].balloon} className="btn-baloons" onAdd={x=>setExtraPriceBaloons(x)} currentExtra={extraPriceBaloons}/>
                        </div>
                        <div className="btn-bouquet">
                            <ExtraBaloons price={extra.bouquet[3].price} name={extra.bouquet[3].balloon} className="btn-baloons" onAdd={x=>setExtraPriceBaloons(x)} currentExtra={extraPriceBaloons}/>
                        </div>  
                    </div>
                </div>
            </>
    )
}