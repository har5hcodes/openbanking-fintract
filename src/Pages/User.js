import React from "react";
import LoggedNavbar from "../Components/LoggedNavbar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function User() {
  return (
    <div>
      <LoggedNavbar/>
      <div style={{display:'flex',alignItems:'flex-start',margin:'auto'}}>
          <div>welcome ujjwal</div>
          <div className="mr-auto">
              <AccountCircleIcon/>
          </div>
      </div>
      
    </div>
  );
}

export default User;
