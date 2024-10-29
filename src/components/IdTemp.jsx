import { Menu } from "../Pages/Menu"
import { Product } from "./Product"


export const IdTemp = ({result})=>{
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
                            <p>
                                {result.title}
                            </p>
                            <br/>
                            {result.desc}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
        
    )
}