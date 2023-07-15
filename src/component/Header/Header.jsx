import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import AddIcon from '@mui/icons-material/Add';

import { Avatar, IconButton } from '@mui/material';

import "./Header.css";
import { ExpandMore, Forum, NotificationsActive, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@mui/icons-material';
import { useStateValue } from '../StateProvider/StateProvider';

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      {/* Header left */}
      <div className="header_left">
        <img className='mt-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="facebook-logo" srcset="" />
        <div className="header_input">
          <SearchIcon />
          <input placeholder='Search Facebook' type="text" name="search" id="" />
        </div>
      </div>
      {/* Header middle */}
      <div className="header_center">
        <div className="header_option  header_option--active">
          <HomeIcon fontSize="large"/>
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large"/>
        </div>
        <div className="header_option">
          <SubscriptionsOutlined fontSize="large"/>
        </div>
        <div className="header_option">
          <StorefrontOutlined fontSize="large"/>
        </div>
        <div className="header_option">
          <SupervisedUserCircle fontSize="large"/>
        </div>
      </div>
      {/* Header right */}
      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  )
}

export default Header;