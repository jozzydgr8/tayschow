import {  Link } from "react-router-dom"
import logo from '../assets/tayLogo.png'
import {  MenuUnfoldOutlined } from "@ant-design/icons"

function Navbar() {
  return (
    <main>
        <div className="container-fluid">
            <div style={{zIndex:"999",display:'flex', justifyContent:"space-between", alignItems:'center', position:'absolute', top:'0', left:"0", right:"0"}}>
                <div style={{paddingLeft:'5%'}}>
                    <img className='navLogo'src={logo} alt="logo" />
                </div>
                <div style={{paddingRight:'5%'}}>
                <button  className="navbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <span className="navM">Menu</span> <MenuUnfoldOutlined/>
                </button>


                <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    {/* <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> */}
                    </ul>
                </div>
                </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Navbar