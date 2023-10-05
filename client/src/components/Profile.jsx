import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const user = useSelector((state) => state.auth.user)
  const [points, setPoints] = useState([])
  const [error, setError] = useState(null)
  console.log(user)
  useEffect(() => {
    axios.get('http://localhost:8080/profile', {params: {user}})
    .then(res => {
      let points = res.data
      console.log(res.data)
      setPoints(points)
      setError(null)
    }).catch(err => setError("couldnt fetch"))
  }, [user])

  return(
    <div>
      <h3 className="pb-6 text-2xl text-center text-white">Profile Dashboard</h3>
      {user ? 
        <div>
        <h4 className="text-xl text-center text-white">Hi, {user}!</h4>
        <div >
          {points.map(element => {
            return <h3 className="text-xl text-center text-white">{"points: " + element.points}</h3>
          })}
        </div>
        </div>
        : null}
    </div>
  )
}


export default Profile;