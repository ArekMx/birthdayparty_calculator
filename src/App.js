import React, {useState, useEffect} from "react";
import { ComponentAtractions } from "./js/Component-atractions/ComponentAtractions";
import { ComponentTableSelect } from "./js/Component-table-select/TableSelect";
import { ComponentExtras } from './js/Component-extras/ComponentExtras';
// import logo from "./images/logo.svg";
import calculator from "./images/calculator.svg";
import Background from './images/wallpapper_gold_mobile_2.png'
import Background2 from './images/wallpapper_gold_mobile.png'

export function App() {

  const aktualizacja = "Aktualizacja: 01.09.2023r."

  const [total, setTotal] = useState('0');

  const [totalAtractions, setTotalAtractions] = useState('');
  const [totalExtras, setTotalExtras] = useState('');  
  const [extraPriceEkoTableware, setExtraPriceEkoTableware] = useState('');
  const [mainSliderNum, setMainSliderNum] = useState('');

  const totalAll = (numOfKids, moneyPerKid) => {
    // console.log(numOfKids);

    setMainSliderNum(numOfKids)
    
    let costPerKid = Number(moneyPerKid) + Number(extraPriceEkoTableware);
    let productOfNumPrice = numOfKids * costPerKid;
    let sumOfTotalAtractExtras = totalAtractions + totalExtras;

    if (numOfKids > 10 && moneyPerKid === "45") {
        setTotal((productOfNumPrice - costPerKid) + sumOfTotalAtractExtras);
        if (numOfKids > 21) {
          setTotal((productOfNumPrice - costPerKid*2) + sumOfTotalAtractExtras);
        }
      } else if (numOfKids > 10 && moneyPerKid === "49") {
        setTotal((productOfNumPrice - costPerKid) + sumOfTotalAtractExtras);
        if (numOfKids > 21) {
          setTotal((productOfNumPrice - costPerKid*2) + sumOfTotalAtractExtras);
        }
      } else {
        setTotal(productOfNumPrice + sumOfTotalAtractExtras);
      }
  }

  const [showAll, setShowAll] = useState(false)

  const handleShow =(value)=> {
    setShowAll(value)
  };

  const styleAtractions = {
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    backgroundImage: `url(${Background})`,
  } 

  const styleExtras = {
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    backgroundImage: `url(${Background2})`,
  } 

  return (
    <div className="App container">
      <div className='logos'>
        //<img className={"logo"} src={logo} alt={"Sala_Zabaw_Piotruś"}/>
        <img className={"calculator"} src={calculator} alt={"Kalkulator_urodzin"}/>
      </div>
      <div className="app-version">
        <p>{aktualizacja}</p>
      </div>
      <header style={styleAtractions} className="App-header">
        <ComponentTableSelect numOfkids={totalAll} onShow={handleShow}/>
      </header>
      {
        showAll ? (
        <>
        <section>
        <ComponentAtractions onUp={x=>setTotalAtractions(x)}/>
        </section>
        <section style={styleExtras} className="extras">
        <ComponentExtras onAddTotalExtras={x=>setTotalExtras(x)} onAddTableware={x=>setExtraPriceEkoTableware(x)}/>
        </section>

        <section className="total">
        <div className="total__text">
          <h1 >Łączny koszt imprezy urodzinowej w Sali Zabaw Piotruś dla {mainSliderNum} dzieci:</h1>
        </div>
        <div className="total__price">
          <h1>{total} zł</h1>
        </div>
        </section>
        
        </>  
        ) : null
      }
    </div>
  );
}
