import React from 'react'
import Post from './Post/Post'
import './Posts.css'
import Stories from './Stories/Stories'
function Posts() {
    return (
        <div className="home__conatainer">
            <div className="app__stories">
               <Stories/>
            </div>
            <div className="home__posts">
                <Post img="https://cdn-images-1.medium.com/max/2000/1*CmjmgiI3Sr6oByNZ81pkhQ.jpeg"/>
                <Post img="https://www.stylevore.com/wp-content/uploads/2020/01/80132998_447696215897314_5289845907688091238_n.jpg"/>
            </div>
        </div>
    )
}

export default Posts
