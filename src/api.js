// here i should do some refactoring to centralize all API calls

// import axios from 'axios';
// import React from 'react';

// const baseURL = "http://localhost:8080/users";

// export default function PostUser() {
//   const [user, setUser] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setUser(response.data);
//     });
//   }, []);

//   if (!user) return null;

//   return (
//     <div>
//       <h1>{user.firstName}</h1>
//       <p>{user.firstName}</p>
//     </div>
//   );
// }
