import testImage from '../assets/smallchopsimg.png'
import gizdodo from '../assets/gizdodo.png';
import puff from '../assets/sugarpuff.png';
import sugarPuff from '../assets/puffpuff.png';
import mPie from '../assets/meatpie.png';
import chapman from '../assets/chapman.png'
export const Menu = ()=>{
    return(
        <section id='menu'>
            <div className="container-fluid">
                <h1 style={{textAlign:'center'}}>Our Menu</h1><br/>

                <h4>Pastries</h4><br/>

                <div className="row">
                    <div className="col-4">
                        <div className="product-image">
                            <img className='aSection' src={mPie} alt='mpie' />
                        </div>
                    </div>
                    <div className="col-8">
                    <h3 className='aSection'>Meat Pie</h3>
                    
                        <p className='fSection'>
                            Deliciously flaky meat pie!
                        </p>
                        <br/>
                        <button className='aSection'>Order now $3.50</button>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-4">
                    <div className="product-image">
                            <img className='aSection' src={puff} alt='testImage'/>
                    </div>
                    </div>
                    <div className="col-8">
                        <h3 className='aSection'>Puff-Puff(plain)</h3>
                        <p className='fSection'>
                            Sweet, fluffy Nigerian puff puff! (10pieces)
                        </p>
                        <br/>
                        <button className='aSection'>Order now $6.50</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                    <div className="product-image">
                            <img className='aSection' src={sugarPuff} alt='testImage'/>
                    </div>
                    </div>
                    <div className="col-8">
                    <h3 className='aSection'>Puff-Puff(sugar)</h3>
                        <p className='fSection'>
                            Sweet, fluffy Nigerian puff puff! (10pieces)
                        </p>
                        <br/>
                        <button className='aSection'>Order now $6.50</button>
                    </div>
                </div>
                <h4>Drinks</h4>
                <div className="row">
                    <div className="col-4">
                    <div className="product-image">
                            <img className='aSection' src={testImage} alt='testImage'/>
                    </div>
                    </div>
                    <div className="col-8">
                    <h3 className='aSection'>Zobo</h3>
                        <p className='fSection'>
                            Delicious hibiscus drink,naturally sweetened and spiced!
                        </p>
                        <br/>
                        <button className='aSection'>Order now $5.00</button>
                    </div>
                </div>


                <div className="row">
                    <div className="col-4">
                    <div className="product-image">
                            <img className='aSection' src={chapman} alt='testImage'/>
                    </div>
                    </div>
                    <div className="col-8">
                    <h3 className='aSection'>Meat Pie</h3>
                        <p className='fSection'>
                            Refreshing Nigerian cocktail with a mix of fruity flavors, garnished with fresh fruits.
                        </p>
                        <br/>
                        <button className='aSection'>Order now $5.00</button>
                    </div>
                </div>
                <h4>Deals</h4>
                <div className="row">
                    <div className="col-4">
                    <div className="product-image">
                            <img className='aSection' src={gizdodo} alt='testImage'/>
                    </div>
                    </div>
                    <div className="col-8">
                    <h3 className='aSection'>Specialty Combo</h3>
                        <p className='fSection'>
                            Gizdodo with Puff Puff & Drink
                        </p>
                        <br/>
                        <button className='aSection'>Order now $15</button>
                    </div>
                </div>
                
            </div>
        </section>
    )
}