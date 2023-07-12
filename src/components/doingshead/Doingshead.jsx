import React, { useState } from 'react'
import './doingshead.scss'
import '../../pages/register/register.scss'

const Doingshead = ({img, care, words}) => {
    const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
        <div className="doingshead">
            <div className="inner">
                <div className="left">
                    <img src={img} alt="" />
                    <div className="writeup">
                        <h2>{care}</h2>
                        <p>{words}</p>
                    </div>
                </div>
                <div className="right">
                    <h3>Start Now</h3>
                    <form action="" className='doingsinfo'>
                        <div className="">
                            <div className="doingsf">
                                <label htmlFor="">First Name</label><br />
                                <input type="text" />
                            </div>
                            <div className="doingsf">
                                <label htmlFor="">Last Name</label><br />
                                <input type="text" />
                            </div>
                            <div className="doingsf">
                                <label htmlFor="">Phone</label><br />
                                <input type='tel' />
                            </div>
                            <div className="doingsf">
                                <label htmlFor="">Email</label><br />
                                <input type='email' />
                            </div>
                            <div className="doingsf">
                                <label htmlFor="">Zip Code</label><br />
                                <input type="text" />
                            </div>
                        </div>
                        <div className="doingssubmit"><h4 onClick={() => toggleTab(1)} className='button'>Next</h4></div>
                    </form>
                    <div className="doingscheck"><span className={toggleState === 1 ? "show" : "check"} >You have Registered</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Doingshead