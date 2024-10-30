import { MobileOutlined } from "@ant-design/icons"
export const AddCart = ()=>{
    return(
        <>
        <main style={{position:'fixed', bottom:"0", left:'0',
                    right:'0',
                    display:"flex",
                        backgroundColor:'white', padding:'20px'}} 
                        className="row">
                    <div className="col-4">
                    <a href={`tel:${process.env.REACT_APP_phone}`} ><MobileOutlined/></a>
                    </div>
                <div className="col-8">
                <button style={{width:'100%'}}>add to cart</button>
                </div>
        </main>
        </>
    )
}