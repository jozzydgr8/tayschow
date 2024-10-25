import chopsImg from '../assets/smallchopsimg.png'
export const About =()=>{
    return(
        <section id='about'>
            <div className="container-fluid">
                <div className="row" style={{display:'flex', alignItems:'center'}}>
                    <div className="col-md-4">
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <img src={chopsImg} alt='chopsimg' />
                            
                        </div>
                    </div>
                    
                    
                    <div className="col-md-8">
                        <div>
                            <br/>
                            <h1>About Us</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur
                                 adipisicing elit. Sit quam voluptatem nesciunt
                                ratione repellendus voluptas nihil iusto blanditiis
                                 reprehenderit possimus?
                            </p>
                            <br/>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}