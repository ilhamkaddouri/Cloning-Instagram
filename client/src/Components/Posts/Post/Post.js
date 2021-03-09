import React from 'react'
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import { Avatar, IconButton} from '@material-ui/core'
import './Post.css'
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TelegramIcon from '@material-ui/icons/Telegram';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
function Post({img}) {
    return (
        <div className="app__post">
            <div className="app__postNavbar">
                <div className="app__postInfos">
                    <Avatar src="https://www.stylevore.com/wp-content/uploads/2020/01/80132998_447696215897314_5289845907688091238_n.jpg"/>
                    <div className="app__postUser">
                        <h4>Ilham Kaddouri</h4>
                        <p>Espoo, Finland</p>
                    </div>
                </div>
               
                <MoreHorizRoundedIcon/>
                
            </div>
            <div className="app__postContent">
                <img className="post__image" src={img}/>
                <div className="app__postIcons">
                    <div>
                        <FavoriteIcon/>
                        <ModeCommentOutlinedIcon/>
                        <TelegramIcon/>
                    </div>
                    <BookmarkBorderIcon/>
                    

                </div>
                <div className="app__postCaption">
                    <h4 className="post__caption"><strong>Ilham kaddouri</strong> Hello it is me ilham kaddouri</h4>
                </div>
                <p className="post__likes">280 likes</p>
               
                <div className="app__postComments">

                </div>
                <div className="app__postComment">
                    <IconButton>
                        <SentimentSatisfiedRoundedIcon/>
                    </IconButton>
                    <form>
                        <input placeholder="Add your comment!"/>
                        <button>add comment!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Post
