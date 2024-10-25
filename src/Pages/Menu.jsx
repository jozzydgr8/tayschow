import testImage from '../assets/smallchopsimg.png'
import gizdodo from '../assets/gizdodo.png';
import puff from '../assets/sugarpuff.png';
import sugarPuff from '../assets/puffpuff.png';
import mPie from '../assets/meatpie.png';
export const Menu = ()=>{
    return(
        <section id='menu'>
            <div className="container-fluid">
                <h1>Our Menu</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="product-image">
                            <img src={mPie} alt='mpie' />
                        </div>
                    </div>
                    <div className="col-8">
                    <h3>Meat Pie</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dignissimos.
                        </p>
                        <br/>
                        <button>Order now</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                    <div className="product-image">
                            <img src={gizdodo} alt='testImage'/>
                    </div>
                    </div>
                    <div className="col-8">
                    <h3>Meat Pie</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dignissimos.
                        </p>
                        <br/>
                        <button>Order now</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                    <div className="product-image">
                            <img src={puff} alt='testImage'/>
                    </div>
                    </div>
                    <div className="col-8">
                        <h3>Meat Pie</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dignissimos.
                        </p>
                        <br/>
                        <button>Order now</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                    <div className="product-image">
                            <img src={sugarPuff} alt='testImage'/>
                    </div>
                    </div>
                    <div className="col-8">
                    <h3>Meat Pie</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dignissimos.
                        </p>
                        <br/>
                        <button>Order now</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                    <div className="product-image">
                            <img src={testImage} alt='testImage'/>
                    </div>
                    </div>
                    <div className="col-8">
                    <h3>Meat Pie</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dignissimos.
                        </p>
                        <br/>
                        <button>Order now</button>
                    </div>
                </div>
                
                {/* <div className="row">
                    <div className="col-4">
                        <div>
                            <div className="product-image">
                            <img src={testImage} alt='testImage'/>
                            </div>
                            <br/>
                            <h3>Lorem ipsum dolor sit amet.</h3> <br/>
                            <button>View Product</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <img src={testImage} alt='testImage'/>
                            <br/>
                            <h3>Lorem ipsum dolor sit amet.</h3> <br/>
                            <button>View Product</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <img src={testImage} alt='testImage'/>
                            <br/>
                            <h3>Lorem ipsum dolor sit amet.</h3> <br/>
                            <button>View Product</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}