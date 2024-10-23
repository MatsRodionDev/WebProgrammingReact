import React from 'react';

const About = () => {
  return(
    <>
        <div className="container-description">
            <h1>About this App</h1>
            <p>
                The User Management App is designed to help you efficiently manage user information.
            </p>
            <p>
                Features include:
            </p>
            <ul>
                <li>Add new users</li>
                <li>Edit existing user details</li>
                <li>Delete users from the system</li>
                <li>View detailed information about each user</li>
            </ul>
            <p>
                Built using React, this app provides a responsive and modern interface for handling user data.
            </p>
        </div>
        
    </>
  ); 
};

export default About;