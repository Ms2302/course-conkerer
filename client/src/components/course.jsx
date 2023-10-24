import React, { useState } from "react";
import Data from '../data/test.json';
import Card from "./CourseCard";
import Buttons from "./buttons";

const Product = () => {
        const [item, setItem] = useState(Data);
        var menuItems = [...new Set(Data.map((Val) => Val.category))];

        //For some reason the array has an undefined variable so a temporary fix below removes any undefined items
        menuItems = menuItems.filter(function( element ){
          return element !== undefined;
        });

        const filterItem = (curcat) => {
          const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
          });
          setItem(newItem);
        };


    return(
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Courses To Choose From</h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item}/>
           
        </div>
      </div>
     
       
    )

}

export default Product;