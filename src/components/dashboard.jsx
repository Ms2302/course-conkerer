import Userfront from "@userfront/react";

Userfront.init("vndy4rvb");

function Dashboard() {
  if (!Userfront.accessToken()) {
    return <p>Please Log In OR Sign Up</p>;
  }
  //points are not added to a user initially. This if statement adds the variable "points" to the user if they do not possess it already
  if (Userfront.user.data.points == undefined) {
    Userfront.user.update({
      data: {
        points: 0
      }
    })
  }
const userData = JSON.stringify(Userfront.user, null, 2);
return(
  <div>
    <h2>Dashboard</h2>
    <pre>{userData}</pre>
    <button onClick={Userfront.logout}>Logout</button>
  </div>
 );

}

export default Dashboard;