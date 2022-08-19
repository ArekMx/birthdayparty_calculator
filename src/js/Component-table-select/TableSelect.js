import React, {useState, useEffect} from "react"
import {SelectedPrice} from './SelectedPrice/SelectedPrice';
import Slider from 'react-smooth-range-input';

import { countTotalTableSelect } from "./functions";
import jubilat_gratis from '../../images/jubilat_gratis.svg'

import Background from '../../images/wallpapper_gold_mobile_1.png'

export const ComponentTableSelect =({numOfkids, onShow}) => {

  const sectionBackgoundStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    backgroundImage: `url(${Background})`
} 
    
  const [pricePerKid, setPricePerKid] = useState('');
  const [numberOfKids, setNumberOfKids] = useState('7');
  // const [minNumSlider, setMinNumSlider] = useState('7');
  const [total, setTotal] = useState('0');
  // const [showSliderMain, setShowSliderMain] = useState('')
  // console.log(minNumSlider);

  // const showSlider = (price) => {
  //   if (price === "45") {
  //     // setShowSliderMain(true)
  //     setMinNumSlider(8);

  //     if(numberOfKids == '7'){
  //       setNumberOfKids(8);
  //     };
  //     // if (numberOfKids > '8' ) {
  //     //   setMinNumSlider(Number(numberOfKids)-1);
  //     // };
  //   } else {
  //     // setShowSliderMain(false);
  //     setMinNumSlider(7)
  //     if(price !== "45" && numberOfKids === 8) {
  //       setNumberOfKids(7);
  //     }
  //   }
  // }

  // useEffect (() => {
  //   showSlider(pricePerKid);
  // }, [pricePerKid, numberOfKids]);


  const prices = {
    week: {
      price: 38,
      title: "Od poniedziałku do czwartku",
      min: ''
    },
    friday: {
      price: 42,
      title: "Piątek",
      min: ''
    },
    weekend: {
      price: 45,
      title: "Sobota, niedziela i święta",
      min: ''
    }
  }


  numOfkids(numberOfKids, pricePerKid);

  const setBtn = (currentPrice) => {
    setPricePerKid(currentPrice)
  };

  const handleNumberOfKids =(selectedNumber) => {
    setNumberOfKids(selectedNumber);

  };
  
  
  useEffect (()=> {

    countTotalTableSelect(numberOfKids, pricePerKid, setTotal, setInfo, setText);
 

  },[numberOfKids, pricePerKid])

  
  const [info, setInfo] = useState(true);
  const [text, setText] = useState('')


  // const [selctedNum, setSelctedNum] = useState('')

  // const [showAll, setShowAll] = useState(false)

  // const handleShow =(value)=> {
  //   // setShowAll(value)
  //   onShow(value)
  // };
  

  
  return (
    <div style={sectionBackgoundStyle} className="main-count">
            <div>
              <p className="title-header">Wybierz dzień tygodnia:</p>
            </div>
            <div className="selectedPrice">
              <div>
                <SelectedPrice price={prices.week.price} title={prices.week.title} min={prices.week.min} onAdd={setBtn} currentPrice={pricePerKid} onShow={x=>onShow(x)}/>
              </div>
              <div>
                 <SelectedPrice price={prices.friday.price} title={prices.friday.title} min={prices.friday.min} onAdd={setBtn} currentPrice={pricePerKid} onShow={x=>onShow(x)}/>
              </div>
              <div>
                <SelectedPrice price={prices.weekend.price} title={prices.weekend.title} min={prices.weekend.min} onAdd={setBtn} currentPrice={pricePerKid} onShow={x=>onShow(x)}/>
              </div>
            </div>
            
            <div>
            {/* {
              showSliderMain ? 
              <select value={numberOfKids} onChange={(e)=>{setNumberOfKids(e.target.value)}}>
              
              <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='25'>25</option>
                <option value='26'>26</option>
                <option value='27'>27</option>
                <option value='28'>28</option>
                <option value='29'>29</option>
                <option value='30'>30</option>
            </select>
            :
            <select onChange={(e)=>{setNumberOfKids(e.target.value)}}>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='25'>25</option>
                <option value='26'>26</option>
                <option value='27'>27</option>
                <option value='28'>28</option>
                <option value='29'>29</option>
                <option value='30'>30</option>
            </select>
            }   */}
            <div className="info-promotion"> 
              {info ? 
              <div>
                <img src={jubilat_gratis} alt="Icon_Jubilat_gratis"/>
                <p className="info-promotion-text">{text}</p>
              </div>
               : null}
            </div>
            </div>
            <div className="count">
              <div className="count-title">
                <p className="slider-title">Wybierz liczbę dzieci łącznie z jubilatem:</p>
              </div>
              <div className="count-slider">
                <Slider value={numberOfKids} min={7} max={30} onChange={handleNumberOfKids}/>
              </div>       
              {/* {
              showSliderMain ? 
              <div className="slider">
                <Slider value={numberOfKids} min={8} max={29} onChange={handleNumberOfKids}/>
              </div>
              :
              <div className="slider">
                <Slider value={numberOfKids} min={7} max={30} onChange={handleNumberOfKids}/>
              </div> 
              } */}
            </div>
            
            {/* <div className="count"> 
              <div className="slider">
                <h3 className="slider-title">Koszt: {total} zł</h3>
              </div>     
            </div>      */}
            </div>
    )
}





             


            