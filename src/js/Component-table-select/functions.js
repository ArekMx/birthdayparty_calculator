


export const countTotalTableSelect= (numberOfKids, pricePerKid, setTotal, setInfo, setText)=> {

    let oneChildPromo = "Od poniedziałku do piątku Jubilat gratis! Przy obecnej liczbie 11 dzieci nie płacisz za JEDNO dziecko!" 

    let twoChildPromo = "Od poniedziałku do piątku Jubilat i Gość gratis! Przy obecnej liczbie 22 dzieci nie płacisz za DWÓJKĘ dzieci!"

    if (numberOfKids > 10 && pricePerKid === "45") {
        setTotal((numberOfKids * pricePerKid) - pricePerKid);
        setInfo(true);
        setText(oneChildPromo);
        if (numberOfKids > 21) {
          setTotal((numberOfKids * pricePerKid) - pricePerKid*2);
          setText(twoChildPromo);
        }
      } else if (numberOfKids > 10 && pricePerKid === "49") {
        setTotal((numberOfKids * pricePerKid) - pricePerKid);
        setInfo(true);
        setText(oneChildPromo);
        if (numberOfKids > 21) {
          setTotal((numberOfKids * pricePerKid) - pricePerKid*2);
          setText(twoChildPromo);
        }
      } else {
        setTotal(numberOfKids * pricePerKid);
        setInfo(false)
      }
}


