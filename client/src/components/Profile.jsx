import { useLocation } from "react-router-dom";


const Profile = () => {
  const location = useLocation()
  const user = location.state
  return(
    <div>
      <h3 className="pb-6 text-2xl text-center text-white">Profile Dashboard</h3>
      {user ? <h4 className="text-xl text-center text-white">Hi, {user}! </h4> :null}
    </div>
  )
}


export default Profile;