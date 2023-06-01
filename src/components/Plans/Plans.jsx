import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='programs-container'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className='heading'>
          <span className='stroke-text'>READY TO START</span>
          <span> YOUR JOURNEY</span>
          <span className='stroke-text'>WITH US ?</span>
        </div>

        <div className="plans">

          {plansData.map((plan,i)=>(
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>

              <div className="features">
                {plan.features.map((features,i)=>(
                  <div className="feature">
                    <img src={whiteTick} alt=""  />{" "}
                    <span key={i}>{features}</span>

                  </div>
                ))}
              </div>

              <div className='benefits'><span>See More Benefits -> </span></div>
              <button className='join'>Join Now</button>

            </div>
          )
          )}

        </div>



    </div>
  )
}

export default Plans
