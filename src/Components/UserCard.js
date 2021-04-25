import React from "react";

const UserCard = ({ user }) => {

    return (
      <div className="card">
            <div className="card-background" >
                 <img src="https://www.mbahalex.com/wp-content/uploads/2019/04/246x0w.jpg" class="card-image"/>

               {user.name[0]}
            </div>

            <div className="card-info">
        <h1>{user.name}</h1> 
         <h2>{user.email}</h2>
        <h2>{user.address.street}</h2>
                <button>View profile </button>
            </div>

            
                </div>

  );
};

export default UserCard;