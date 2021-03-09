import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TelegramIcon from '@material-ui/icons/Telegram';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

import { Avatar } from '@material-ui/core'
import { IconButton} from '@material-ui/core'
import './Header.css'
function Header() {
    return (
        <div className="app__header">
          <img 
            className="app__headerImage"
            src="https://logo-marque.com/wp-content/uploads/2020/04/Instagram-Logo-2016-Pr%C3%A9sent.jpg" alt="Instagram"/>
          <div className="app__headerInput">
            <form>
                <input type="text" placeholder="search" />
                <button type="submit"></button>
            </form>
          </div>
          <div className="app__headerRight">
             
                
                    <HomeRoundedIcon className="app__headerButton"/>
              
             
                    <TelegramIcon className="app__headerButton"/>
               
              
                    <ExploreOutlinedIcon className="app__headerButton"/>
               
            
                    <FavoriteRoundedIcon className="app__headerButton"/>
                    <Avatar className="app__headerAvatar" src="https://th.bing.com/th/id/OIP.xzIfQQCZiBpvccxSZUsOSAHaHa?pid=ImgDet&rs=1" />
               

            
          </div>
        </div>
    )
}

export default Header
