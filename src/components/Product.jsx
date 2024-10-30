import {  NavLink } from "react-router-dom"

export const Product = ({menu})=>{
    return(
        <>
        <div className='product'>
                            <div className="row" style={{display:'flex', alignItems:'center', }}>
                                <div className="col-md-4">
                                    <div className="product-image">
                                    <img className="" src={menu.image} alt='menuImg'/>
                                    </div>
                                </div>
                                <div  className="col-md-8">
                                    <div className='product-desc'>
                                    <h3 className="">{menu.title}</h3>
                                    <p className="">
                                        {menu.desc}
                                    </p>
                                    <br/>
                                    <NavLink to={`/tayschow/${menu.id}`}  className="">Order Now ${menu.prize}</NavLink>
                                    </div>
                                </div>
                            </div>
                            
                            
        </div>
        </>
    )
}
