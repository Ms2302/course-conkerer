import React, { useState } from "react";
import Courses from '../data/CourseDetails.json';
import { AiFillCloseCircle } from "react-icons/ai";
const Product = () => {
        const [detail, setDetail] = useState([]);
        const [close, setClose] = useState(false);
        const detailPage = (Product) =>
        {
            setDetail([{...Product}])
            setClose(true)
        }
    return(

        <div className="App">
        {
            close ?
            <div className="detail_container">
            <div className="detail_content">
            <button className="close" onClick={() => setClose(false)}><AiFillCloseCircle/></button>
            {
                detail.map((x) =>
                {                        
                    return(
                        <div className="detail_info">
                            <h1>{x.title}</h1>
                        </div>
                    )   
                })
            }
            </div>

        </div>:null
        }

    <div className="App">
    {
        Courses.map((curElm) =>
        {
            if (curElm.stars !== null){
                return(
                    <div className="card" key={ curElm.id }>
                      <div className="background">
                        <strong>{ curElm.title }</strong><br></br>
                        <span id="stars"></span><br></br>
                        <p>Time: { curElm.time }</p><br></br>
                        
                      </div>
                      <div className="foreground">
                        <h1>Points: 50</h1>
                        <button onClick={() => detailPage(curElm)}>View</button>      
                      </div>
                    </div>
                  )
            }
            else{
                    return(
                        <div className="card" key={ curElm.id }>
                          <div className="background">
                            <strong>{ curElm.title }</strong><br></br>
                            <p>Time: { curElm.time }</p><br></br>
                            
                          </div>
                          <div className="foreground">
                            <h1>Points: 50</h1>
                            <button onClick={() => detailPage(curElm)}>View</button>      
                          </div>
                        </div>
                      ) 
            }
        })
    }
    </div>
    </div>
       
    )

}

export default Product;