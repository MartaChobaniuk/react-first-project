import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfoadBiOrLG1zXJbI_zru2koK-4ElSc-k5g&usqp=CAU'
        alt='girl'/>
        { props.message }
        <div>
          <span>like</span> { props.likesCount }
        </div>
    </div>
  );
}    

export default Post;