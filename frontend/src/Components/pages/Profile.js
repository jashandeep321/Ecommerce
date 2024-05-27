// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   // Fetch user data on page load
//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = () => {
//     axios.get('http://localhost:8082/profile')
//       .then(response => {
//         if (response.data.success) {
//           setUser(response.data.user);
//         } else {
//           setErrorMessage('Failed to fetch user data');
//         }
//       })
//       .catch(error => {
//         console.error('Fetch user data error:', error);
//         setErrorMessage('Error fetching user data');
//       });
//   };

//   return (
//     <div>
//       <h2>User Profile</h2>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       {user && (
//         <div>
//           <div>
//             <label>Name:</label>
//             <p>{user.UName}</p>
//           </div>
//           <div>
//             <label>Email:</label>
//             <p>{user.UEmail}</p>
//           </div>
//           <div>
//             <label>Password:</label>
//             <p>{user.Password}</p>
//           </div>
//           <div>
//             <label>Address Line 1:</label>
//             <p>{user.PAdd1}</p>
//           </div>
//           <div>
//             <label>Address Line 2:</label>
//             <p>{user.PAdd2}</p>
//           </div>
//           <div>
//             <label>Pincode:</label>
//             <p>{user.Pincode}</p>
//           </div>
//           <div>
//             <label>Contact:</label>
//             <p>{user.Contact}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProfileDisplay = () => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios.get('http://localhost:8082/profile', { withCredentials: true })
      .then(response => {
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          setErrorMessage('Failed to fetch user data');
        }
      })
      .catch(error => {
        console.error('Fetch user data error:', error);
        setErrorMessage('Error fetching user data');
      });
  };

  return (
    <div>
      <h2>User Profile</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {user && (
        <div>
          <p><strong>Name:</strong> {user.UName}</p>
          <p><strong>Email:</strong> {user.UEmail}</p>
          <p><strong>Address Line 1:</strong> {user.PAdd1}</p>
          <p><strong>Address Line 2:</strong> {user.PAdd2}</p>
          <p><strong>Pincode:</strong> {user.Pincode}</p>
          <p><strong>Contact:</strong> {user.Contact}</p>
          <Link to="/EditProfile">
            <button>Edit Profile</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDisplay;

