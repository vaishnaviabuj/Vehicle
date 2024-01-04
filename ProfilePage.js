import React from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css';
function ProfilePage() {
  return (
    
    <div className="">
        <ul className="aaa">
          <li className=''>
            <Link to="/ModifyName"> Modify Name of User </Link>
          </li>
          <li>
            <Link to="/ModifyPassword"> Modify Password</Link>
          </li>
         
        </ul>
        
        </div>
  )
}

export default ProfilePage
