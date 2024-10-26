import { Product } from '../components/Product';
import { Data } from '../Data';
export const Menu = ()=>{
    return(

        <section id='menu'>
            <div className="container-fluid">
                <h1>Our Menu</h1><br/>
                <h4>Pastries</h4>
                {
                    Data && Data.filter(menu => menu.category == 'pastries').map(menu=>(
                        <Product key={menu.id} menu={menu}/>
                    ))
                }
                <h4>Drinks</h4>
                {
                    Data && Data.filter(menu => menu.category == 'drink').map(menu=>(
                        <Product key={menu.id} menu={menu}/>
                    ))
                }
                <h4>Deals</h4>
                {
                    Data && Data.filter(menu => menu.category == 'special').map(menu=>(
                        <Product key={menu.id} menu={menu}/>
                    ))
                }
            </div>
        </section>
        
    )
}