import React from 'react';
import preloader from '../../../img/loading_img.svg';

let Preloader = (props) => {
  return <div style={ {backgroundColor:'white'} }>
    <img src={preloader} alt=''/> 
  </div>
}

export default Preloader;