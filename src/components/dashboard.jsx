import Userfront from "@userfront/react";
import { Routes, Route, redirect } from 'react-router-dom';

Userfront.init("vndy4rvb");
const LogoutButton = Userfront.build({
    toolId: "alrdbld"
    });

function Dashboard() {
      if (!Userfront.accessToken()) {
        return redirect("/login");
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