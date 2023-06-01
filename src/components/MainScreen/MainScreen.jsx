import React from 'react'
import './MainScreen.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png' 
import {motion} from 'framer-motion'

const MainScreen = () => {
  const transition = {type: 'spring', duration:15}
  return (
    <div>
      <div className="blur main-blur"></div>
      <div className="mainscreen">
        <div className="leftPanel">
          <Header/>

          <div className='the-best-ad'>
            <motion.div
            initial = {{left:'8px'}}
            whileInView = {{left:'210px'}}
            transition = {{...transition, type:'tween'}}
            >

            </motion.div>
            <span>THE BEST FITNESS HUB IN IN THE CITY </span>
          </div>

          <div className='maintext'>
            <div>
              <span className='stroke-text'>SHAPE </span>
              <span>YOUR</span>
            </div>
            <div>
              <span>IDEAL BODY</span>
            </div>

            <div>
              <span>Here we will help you to shape and build your ideal body and live your life confidentally.</span>
            </div>

            <div className="figures">
              <div>
                <span>+140</span>
                <span>EXPERT COACHES</span>
              </div>
              
              <div>
                <span>+978</span>
                <span>MEMBERS JOINED</span>
              </div>

              <div>
                <span>+50</span>
                <span>FITNES PROGRAMS</span>
              </div>

            </div>

          </div>

          <div className="main-button">
            <button className="btn">
              Get Started
            </button>
            <button className="btn">
              Learn More
            </button>
          </div>

        </div>




        <div className="rightPanel">

          <button className='btn'>
            Join Now
          </button>

          <motion.div
          initial = {{right: '-1rem'}}
          whileInView ={{right: '3rem'}}
          transition={transition}
          
          className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>
          </motion.div>

          <img src={hero_image} alt="" className='hero-image' />

          <motion.img 
          initial = {{right: '10rem'}}
          whileInView ={{right: '15rem'}}
          transition={transition}
          src={hero_image_back} alt="" className="hero-image-back" />

          <motion.div 
          initial = {{right: '37rem'}}
          whileInView ={{right: '28rem'}}
          transition={transition}
          className="calories">
            <img src={calories} alt="" />
            <div>  
            <span>Calories Burned </span><span>220 kcal</span>
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  )
}

export default MainScreen
