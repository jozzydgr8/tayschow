import { Link } from "react-router-dom"

export const Product = ({menu})=>{
    return(
        <>
        <div className='product'>
                            <div className="row" style={{display:'flex', alignItems:'center', }}>
                                <div className="col-md-4">
                                    <div className="product-image">
                                    <img className="aSection" src={menu.image} alt='menuImg'/>
                                    </div>
                                </div>
                                <div  className="col-md-8">
                                    <div className='product-desc'>
                                    <h3 className="aSection">{menu.title}</h3>
                                    <p className="fSection">
                                        {menu.desc}
                                    </p>
                                    <br/>
                                    <Link to={`/tayschow/${menu.id}`}  className="aSection">Order Now ${menu.prize}</Link>
                                    </div>
                                </div>
                            </div>
                            
                            
        </div>
        </>
    )
}
