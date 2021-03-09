import React from 'react'
import './Profile.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Avatar} from '@material-ui/core'
const useStyles =makeStyles((theme) => ({
    root: {
     textDecoration : "none",
     color: "rgb(16, 219, 255)",
     fontSize: "13px",
     outline :"none",
     backgroundColor :"none",
     textTransform:"lowercase"
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
      },
      large: {
        width: theme.spacing(11),
        height: theme.spacing(14),
      },
    
  }));
function Profile() {
    const classes = useStyles();
    return (
        <div className="profile__cantainer">
            <div className="profile__header">
                <div className="profile__infos">
                    <Avatar className="user__avatar" src="https://www.stylevore.com/wp-content/uploads/2020/01/80132998_447696215897314_5289845907688091238_n.jpg"/>
                    <div className="user__infos">
                        <h4>Ilham kaddouri</h4>
                        <p>Capture the uncaptured!</p>
                    </div>
                </div>
                <Button className={classes.root}>Switch</Button>
            </div>
            <div className="profile__suggestions">
                <div className="suggestions__header">
                    <h4>Suggestions For You</h4>
                    <p>See All</p>
                </div>
                <div className="user__suggestions">
                   
                        <div className="suggestions">
                            <Avatar className={classes.small} src="https://i.pinimg.com/736x/72/7b/0a/727b0a6c70d2be85ed97a88e7c39fa1e.jpg"/>
                            <div className="suggestion__infos">
                                <h4>Ilham kaddouri</h4>
                                <p>Followed by you, amine,</p>
                            </div>
                        </div>
                        <Button className={classes.root}>Follow</Button>
                   
                </div>
                <div className="user__suggestions">
                   
                        <div className="suggestions">
                            <Avatar className={classes.small} src="https://i.pinimg.com/736x/72/7b/0a/727b0a6c70d2be85ed97a88e7c39fa1e.jpg"/>
                            <div className="suggestion__infos">
                                <h4>Ilham kaddouri</h4>
                                <p>Followed by you, amine,</p>
                            </div>
                        </div>
                        <Button className={classes.root}>Follow</Button>
                   
                </div>
                <div className="user__suggestions">
                   
                        <div className="suggestions">
                            <Avatar className={classes.small} src="https://cdn.codipop.com/images/celebrity/cover/5177/200116_Blackpink_Jennie_UNIF_CodiPOP_000.jpg"/>
                            <div className="suggestion__infos">
                                <h4>Ilham kaddouri</h4>
                                <p>Followed by you, amine,</p>
                            </div>
                        </div>
                        <Button className={classes.root}>Follow</Button>
                   
                </div>
                <div className="user__suggestions">
                   
                        <div className="suggestions">
                            <Avatar className={classes.small} src="https://img.nordjyske.dk/s3/nj-prod-public-images/ygnjXz4Feuno_pKxKjB8nxvv-go.jpg?cropxunits=1&cropyunits=1&crop=0,0,1,1&w=624&mode=max&scale=both"/>
                            <div className="suggestion__infos">
                                <h4>Ilham kaddouri</h4>
                                <p>Followed by you, amine,</p>
                            </div>
                        </div>
                        <Button className={classes.root}>Follow</Button>
                   
                </div>
            </div>
            <div className="profile__footer">

            </div>
        </div>
    )
}

export default Profile
