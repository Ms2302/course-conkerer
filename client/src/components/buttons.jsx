import React from "react";
import Data from '../data/test.json';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Buttons = ({ filterItem, filterItems, setItem, menuItems }) => {
  const user = useSelector((state) => state.auth.user)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)

  useDispatch(useEffect(() => {
    axios.get('http://localhost:8080/Questions', {params: {user}})
    .then(res => {
      let results = res.data
      setResults(results)
      setError(null)
    }).catch(err => setError("couldnt fetch"))
  }, [user]))  

  return (
      <div className="d-flex justify-content-center w-100">
      <button
      className="btn-dark text-white mr-10 fw-bold btn"
      onClick={() => setItem(Data)}
      >
      All
      </button>
      {user ?
        <button
        className="btn-dark text-white mr-10 fw-bold btn"
        onClick={() => filterItems(results[0].area, results[0].Level)}
        >
        Recommended
        </button>
      : null}

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