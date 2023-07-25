import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Card = ({ item }) => {
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
                item.map((detail) =>
                {                   
                  if (detail.stars !== null){
                    return(
                      <div className="detail_info">
                        <div className="img-box">
                          <img src="" alt={detail.title}></img>
                        </div>
                        <div className="course_detail">
                          <h2>{detail.title}</h2>
                          <h3>{detail.time}</h3>
                          <h3>{detail.stars}</h3>
                        </div>

                      </div>
                  )   
                  }
                  else{
                    return(
                      <div className="detail_info">
                        <div className="img-box">
                          <img src="" alt={detail.title}></img>
                        </div>
                        <div className="course_detail">
                          <h2>{detail.title}</h2>
                          <p>{detail.time}</p>
                        </div>
                      </div>
                  )   
                  }   
                })
            }
            </div>

        </div>:null
        }

    <div className="App">
    {
      
        item.map((Val) =>
        {

            if (Val.stars !== null){
                return(
                    <div className="card" key={ Val.id }>
                      <div className="background">
                        <strong>{ Val.title }</strong><br></br>
                        <span id="stars">{ Val.stars }</span><br></br>
                        <p>Time: { Val.time }</p><br></br>
                        
                      </div>
                      <div className="foreground">
                        <h1>Points: 50</h1>
                        <button onClick={() => detailPage(Val)}>View</button>      
                      </div>
                    </div>
                  )
            }
            else{
                    return(
                        <div className="card" key={ Val.id }>
                          <div className="background">
                            <strong>{ Val.title }</strong><br></br>
                            <p>Time: { Val.time }</p><br></br>
                            
                          </div>
                          <div className="foreground">
                            <h1>Points: 50</h1>
                            <button onClick={() => detailPage(Val)}>View</button>      
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

export default Card;