import { PhoneFilled} from "@ant-design/icons"
import { californiaPlaces } from "../Data"
import { Select } from "antd"


export const IdTemp = ({result})=>{
    const{Option} = Select;
    return(
        <>
        <section style={{backgroundImage:`url(${result.image})`, backgroundSize:'cover', backgroundPosition:"center"
        , height:"30vh", paddingTop:"80px"}} >
            <div className="container-fluid">
                {result.title}
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
                            ${result.prize}
                            <br/>
                            Delivery $5.00 central california.
                            <br/>
                            <PhoneFilled/>
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
                            
                            <div>similar products</div>
                            <div>questions about this product chat</div>
                            
                            <button>add to cart</button>
                            call
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
        
    )
}