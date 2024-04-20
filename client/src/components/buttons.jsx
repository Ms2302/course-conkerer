import React from "react";
import Data from '../data/test.json';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";


const Buttons = ({ filterItem, filterItems, setItem, menuItems }) => {

  // Hooks allow components to use local component state
  // Set user const to who is logged in 
  const user = useSelector((state) => state.auth.user)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)

  useDispatch(useEffect(() => {

    //axios request to get questionnaire results
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

      // Filter to all courses
      onClick={() => setItem(Data)}
      >
      All
      </button>

      {/*If user is logged in, display the filter based on questionnaire answers*/}
      {user ?
        <button
        className="btn-dark text-white mr-10 fw-bold btn"
        onClick={() => filterItems(results[0].area, results[0].Level)}
        >
        Recommended
        </button>
      : null}
        {/*Add a filter button per course category*/}
        {menuItems.map((Val, id) => {
          if (Val !== null){
            return (
              <button
                className="btn-dark text-white mr-10  btn fw-bold"
                onClick={() => filterItem(Val)}
                key={id}
              >
                {Val}
              </button>
            );
          }
          else{
            return;
          }

        })}

      </div>
  );
};

export default Buttons;