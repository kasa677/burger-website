import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Aboutcock() {
  const { drinkid } = useParams();
  const [drinksdetails, setDrinksdetails] = useState("");
  const [ loading , setLoading] = useState(true);
  console.log(drinkid);
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${drinkid}`)
      .then((resp) => resp.json())
      .then((data)=>{
        setDrinksdetails(data.drinks[0])
        setLoading(false);
      })
        
  }, []);
  console.log(drinksdetails);
  if(loading){
    return(
      <h1 className="text-success">Cocktails drinks is loading.......</h1>
    )

  }

  return (
   <></>
  
  );
}

export default Aboutcock;
