import { useState } from 'react';
import { Product } from '../components/Product';
import { Data } from '../Data';
export const Menu = ()=>{
    const [active, setActive] = useState('pastries')
    return(
        <>
        <section id='menu'>
        <h1 style={{textAlign:'center'}}>Our Menu</h1><br/>
                <div className='container' style={{display:"flex", alignItems:'center', justifyContent:"space-evenly"}}>
                    <h4 onClick={()=>setActive('pastries')} className={active == 'pastries'?'menu-active':''}>Pastries</h4>
                    <h4 onClick={()=>setActive('drink')} className={active == 'drink'?'menu-active':''}>Drinks</h4>
                    <h4 onClick={()=>setActive('special')} className={active == 'special'?'menu-active':''}>Deals</h4>
                </div>
            <div className="container-fluid">

                {
                    Data && Data.filter(menu => menu.category == active).map(menu=>(
                        <Product key={menu.id} menu={menu} />
                    ))
                }
                <br/>
                
            </div>
        </section>
        </>
        
        
    )
}