import { CloseCircleOutlined, LockOutlined, MinusCircleOutlined, MobileFilled, MobileOutlined, PhoneFilled} from "@ant-design/icons"
import { californiaPlaces, Data } from "../Data"
import {  Select } from "antd"
import { AddCart } from "./AddCart";
import { Product } from "./Product";
import {Menu} from '../Pages/Menu'
import {UseContextAuth} from '../context/UseContextAuth'
import { Link } from "react-router-dom";


export const IdTemp = ({result})=>{
    const{Option} = Select;
    const {user} = UseContextAuth()
    const handleAddCart = ()=>{
        if(!user){

        }
    }
    return(
        <>
        <section style={{backgroundImage:`url(${result.image})`, backgroundSize:'cover', backgroundPosition:"center"
        , height:"30vh"}} >
            <div className="container-fluid" style={{width:"100%", height:"100%", backdropFilter:'brightness(50%)'}}>
            </div>
        </section>

        {/* //split secptioj */}
        <section id="idTemp">
            <div className="container-fluid">
                
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tempImg">
                            <img src={result.image} alt=""/>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div className="tempProduct">

                            <div>
                            <h1>
                                {result.title}
                            </h1>
                            {result.desc}
                            <br/>
                            Price: ${result.prize}
                            <br/>
                            Delivery $5.00 central california.
                            <br/>
                            <MobileOutlined/>
                            <a href={`tel:${process.env.REACT_APP_phone}`}>call +1909TastyChow</a> to place your order
                            </div>
                            <br/>

                            
                            <div>
                            <h3>choose your location</h3>
                            <form action="">
                                
                            <Select
                                style={{ width: '100%' }}
                                placeholder="Select a place"
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    String(option?.children ?? "").toLowerCase().includes(input.toLowerCase())
                                }
                                >
                                {californiaPlaces.map((place, index) => (
                                    <Option key={index} value={place.name}>
                                    {`${place.name} - ${place.location}`}
                                    </Option>
                                ))}
                            </Select>
                                                            
                            </form>
                            <br/>
                            pick up location: Madera / Fresno
                            <br/>
                            return policy: no return
                            </div>
                            <br/>

                            <div style={{}}>
                            verified customer feedback
                            <div>
                                product rating and reviews
                            </div>
                            </div>
                            <br/>
                            
                            
                            <div>questions about this product chat</div>
                            <br/>
                            <div style={{
                                        display:"flex",
                                        alignItems:'center',
                                        }} 
                                        className="row">
                                        <div className="col-2">
                                            <div className="cart-call">
                                            <a href={`tel:${process.env.REACT_APP_phone}`}  ><MobileOutlined/></a>
                                            </div>
                                        
                                        </div>
                                    <div className="col-10">
                                    <button disabled={!user} className={user ? 'cart-btn':'dis-cart-btn'} onClick={handleAddCart}>add to cart {!user &&<LockOutlined/>}</button>
                                    </div>
                            </div>
                            <br/>
                            <Link to={'/tayschow/login'}>click now to login and add to cart!</Link> 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


                <Menu/>
            
            
        </>
        
    )
}