


export const countTotalTableSelect= (numberOfKids, pricePerKid, setTotal, setInfo, setText)=> {



    if (numberOfKids > 9 && pricePerKid === "38") {
        setTotal((numberOfKids * pricePerKid) - pricePerKid);
        setInfo(true);
        setText("Promocja! Od poniedziałku do piątku Jubilat gratis! Nie płacisz za JEDNO dziecko!");
        if (numberOfKids > 21) {
          setTotal((numberOfKids * pricePerKid) - pricePerKid*2);
          setText("Promocja! Od poniedziałku do piątku Jubilat i Gość gratis! Nie płacisz za DWÓJKĘ dzieci!");
        }
      } else if (numberOfKids > 9 && pricePerKid === "42") {
        setTotal((numberOfKids * pricePerKid) - pricePerKid);
        setInfo(true);
        setText("Promocja! Od poniedziałku do piątku Jubilat gratis! Nie płacisz za JEDNO dziecko!");
        if (numberOfKids > 21) {
          setTotal((numberOfKids * pricePerKid) - pricePerKid*2);
          setText("Promocja! Od poniedziałku do piątku Jubilat i Gość gratis! Nie płacisz za DWÓJKĘ dzieci!");
        }
      } else {
        setTotal(numberOfKids * pricePerKid);
        setInfo(false)
      }
}


