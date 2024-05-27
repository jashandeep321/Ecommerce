
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    UName: '',
    UEmail: '',
    Password: '',
    PAdd1: '',
    PAdd2: '',
    Pincode: '',
    Contact: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  // const history = useHistory();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios.get('http://localhost:8082/profile', { withCredentials: true })
      .then(response => {
        if (response.data.success) {
          const user = response.data.user;
          setFormData({
            UName: user.UName,
            UEmail: user.UEmail,
            Password: '',
            PAdd1: user.PAdd1,
            PAdd2: user.PAdd2,
            Pincode: user.Pincode,
            Contact: user.Contact
          });
        } else {
          setErrorMessage('Failed to fetch user data');
        }
      })
      .catch(error => {
        console.error('Fetch user data error:', error);
        setErrorMessage('Error fetching user data');
      });
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put('http://localhost:8082/editprofile', formData, { withCredentials: true })
      .then(response => {
        if (response.data.success) {
          setSuccessMessage('User data updated successfully');
          // history.push('/profile');
        } else {
          setErrorMessage('Failed to update user data');
        }
      })
      .catch(error => {
        console.error('Update user data error:', error);
        setErrorMessage('Error updating user data');
      });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="UName"
            value={formData.UName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="UEmail"
            value={formData.UEmail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address Line 1:</label>
          <input
            type="text"
            name="PAdd1"
            value={formData.PAdd1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address Line 2:</label>
          <input
            type="text"
            name="PAdd2"
            value={formData.PAdd2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="number"
            name="Pincode"
            value={formData.Pincode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="Contact"
            value={formData.Contact}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
