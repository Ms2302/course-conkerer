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
      <h3 className="pb-6 text-2xl text-center text-white">Profile Dashboard</h3>
      {user ? 
        <div>
        <h4 className="text-xl text-center text-blakc">Hi, {user}!</h4>
        <div>
          {points.map(element => {
            return <h3 className="text-xl text-center text-black">{"points: " + element.points}</h3>
          })}
        </div>
        <div>
          {rank.map(element =>{
            if(element.username == user){
              return <h3 className="text-xl text-center text-black">{"You are rank: " + element.USER_RANK}</h3>
            }
          })}
        </div>
        </div>
        : null}
    </div>
  )
}


export default Profile;