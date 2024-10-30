import { Link } from "react-router-dom";
import logo from '../assets/tayLogo.png';
import { MenuUnfoldOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { UseContextAuth } from "../context/UseContextAuth";
import { message } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../App";
import { useRef } from "react";

function Navbar() {
    const { user } = UseContextAuth();
    const closeButtonRef = useRef(null);

    const handleCartDirect = () => {
        if (!user) {
            message.info('Log in to place order');
        } else {
            window.location.href = '/tayschow/cart';
        }
    };

    const handleLogOut = () => {
        signOut(auth);
    };

    // Function to close the offcanvas by clicking the close button
    const closeOffcanvas = () => {
        if (closeButtonRef.current) {
            closeButtonRef.current.click();
        }
    };

    return (
        <main>
            <div className="container-fluid">
                <div style={{ zIndex: "999", display: 'flex', justifyContent: "space-between", alignItems: 'center', position: 'absolute', top: '0', left: "0", right: "0" }}>
                    <div style={{ paddingLeft: '5%' }}>
                        <img className='navLogo' src={logo} alt="logo" />
                    </div>

                    <div style={{ display: "flex", gap: '5px', paddingRight: '5%', justifyContent: "center", alignItems: "center" }}>
                        <div className="shopping" onClick={handleCartDirect}>
                            <ShoppingCartOutlined />
                        </div>
                        <div>
                            <button className="navbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                <span className="navM">Menu</span> <MenuUnfoldOutlined />
                            </button>

                            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ref={closeButtonRef}></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/tayschow" onClick={closeOffcanvas}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" onClick={closeOffcanvas}>About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" onClick={closeOffcanvas}>Contact Us</a>
                                        </li>
                                        <li className="nav-item">
                                            {
                                                user ? <span className="nav-link" onClick={() => { handleLogOut(); closeOffcanvas(); }}>Logout</span> :
                                                    <Link className="nav-link" to='login' onClick={closeOffcanvas}>Sign In</Link>
                                            }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Navbar;
