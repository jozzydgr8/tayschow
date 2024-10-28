import { useState } from 'react';
import chopsImg from '../assets/gizdodo.png';
export const About =()=>{
    const [rmore, setRmore] = useState(false)
    return(
        <section id='about'>
            <div className="container-fluid">
                <div className="row" style={{display:'flex', alignItems:'center'}}>
                    <div className="col-md-4">
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <img src={chopsImg} alt='chopsimg' className='aSection' />
                            
                        </div>
                    </div>
                    
                    
                    <div className="col-md-8">
                        <div>
                            <br/>
                            <h1>ABOUT US</h1>
                            <p className='fSection'>
                                Welcome to Nigeria's No.1 Pastry in Central California!
                                We are dedicated to bringing you the authentic taste of Nigerian pastries.
                                <br/>
                                {
                                    rmore && 
                                    "Our mission is to share the rich culinary heritage of Nigeria through our delicious and unique offerings, made with the finest ingredients."
                                }
                            </p>
                            <br/>
                            <button onClick={()=>{setRmore(!rmore)}} className='aSection'>{!rmore ? 'READ MORE':'READ LESS'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}