import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Profile = () => {
  const user = useSelector((state) => state.auth.user)
  const [points, setPoints] = useState([])
  const [rank, setRank] = useState([])
  const [error, setError] = useState(null)

  useDispatch(useEffect(() => {
    axios.get('http://localhost:8080/profile', {params: {user}})
    .then(res => {
      let points = res.data
      setPoints(points)
      setError(null)
    }).catch(err => setError("couldnt fetch"))
  }, [user]))

  useDispatch(useEffect(() => {
    axios.get('http://localhost:8080/LeaderBoard')
    .then(res => {
      let rank = res.data
      console.log(rank)
      setRank(rank)
      setError(null)
    }).catch(err => setError("couldnt fetch"))
  }, [user]))

  return(
    <div>
      <h1 className="pb-6 text-6xl text-center text-black">Profile Dashboard</h1>
      {user ? 
        <div>
        <h3 className="text-xl pt-10 text-center text-5xl  text-black">Hi {user} &#x1F44B;</h3>
        <div>
          {points.map(element => {
            return <h3 className=" text-3xl text-center text-black">Points Earned: &#x2B50; {element.points}</h3>
          })}
        </div>
        <div className="pt-20">
        <table className="table table-hover table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>User</th>
            <th>Rank</th>
            <th>Points</th>
          </tr>
          </thead>
          <tbody>
          {rank.map(element =>{
            if(element.username == user){
              return(
                <tr >
                  <td className="text-success">You</td>
                  <td>{element.USER_RANK}</td>
                  <td>{element.points}</td>
                </tr>
              ) 
            }
            else return(
              <tr>
                <td>{element.username}</td>
                <td>{element.USER_RANK}</td>
                <td>{element.points}</td>
              </tr>
            )
          })}
          </tbody>
        </table>

        </div>
        </div>
        : null}
    </div>
  )
}


export default Profile;