import React from "react";
import Data from '../data/test.json';
 
const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
      <div className="d-flex justify-content-center w-100">
      <button
      className="btn-dark text-white mr-10 fw-bold btn"
      onClick={() => setItem(Data)}
      >
      All
      </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white mr-10  btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}

      </div>
  );
};

export default Buttons;