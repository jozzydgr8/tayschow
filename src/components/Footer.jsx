import {Link} from 'react-router-dom'
export const Footer = ()=>{
    return(
        <section id="footer">
            <footer className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Disclaimer</h3>
                        <p>
                        Our pastry services are exclusively available within Central California.
                        We currently do not serve areas outside this region.
                         {/* We appreciate your understanding and
                        look forward to bringing our delicious pastries to customers within the Central California area only. */}
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h3>Reach Us</h3>
                        {process.env.REACT_APP_email}<br/>
                        <a href={`mailto:${process.env.REACT_APP_phone}`}>{process.env.REACT_APP_phone}</a>
                    </div>
                    <div className="col-md-3">
                        <h3>Email</h3>
                        <a href={`mailto:${process.env.REACT_APP_email}`}>{process.env.REACT_APP_email}</a>
                    </div>
                    <div className="col-md-3">
                        <h3>Links</h3>
                         <Link>Home</Link><br/> <a href={`mailto:${process.env.REACT_APP_email}`}>Contact Us</a> <br/>
                        <Link>Terms & Conditions</Link> <br/>

                    </div>
                </div>
            </footer>
        </section>
    )
}