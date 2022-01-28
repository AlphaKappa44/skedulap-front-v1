// import axios from 'axios';
// import React from 'react';

// const baseURL = "http://localhost:8080/users";

// export default function PostUser() {
//   const [user, setUser] = React.useState("Johnny");

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setUser(response.data);
//       console.log(response.data);

//     });
//   }, []);

//   if (!user) return null;

//   return (
//     <div>
//         <h1>Users :</h1>
//       <h1>{}</h1>
//         {console.log(user.firstName)}
//       <p>{user.firstName}</p>
//     </div>
//   );
// }

import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/users";

export default function User() {
  const [userGet, setUserGet] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUserGet(response.data);
      console.log(response.data);
    });
  }, []);

  if (!userGet) return null;

  return (
    <div>
      <ul>
        {userGet.map(user => {
            return (
                <li key={user.id}>
                    prénom: {user.first_name} - nom: {user.last_name} - mail: {user.email}
                    

                </li>
    )
  })}
</ul>
    </div>
  );
}