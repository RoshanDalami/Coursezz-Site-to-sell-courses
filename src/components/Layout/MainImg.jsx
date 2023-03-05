import React from 'react'
import SourceImage from '../../assets/code.jpg' 
import classes from './Header.module.css'
function MainImg() {
  return (
    <>
        <div className={classes['main-image']}>
        <img src={SourceImage}  />
      </div>
    </>
  )
}

export default MainImg
