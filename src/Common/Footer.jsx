import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-primary mb-4">Get In Touch</h4>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, Salt Lake, Kolkata</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                        <div className="d-flex justify-content-start mt-4">
                            <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} to="#"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} to="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} to="#"><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} to="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-primary mb-4">Quick Links</h4>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white mb-2" to="/"><i className="fa fa-angle-right mr-2"></i>Home</Link>
                            <Link className="text-white mb-2" to="/about"><i className="fa fa-angle-right mr-2"></i>About Us</Link>
                            <Link className="text-white mb-2" to="/feature"><i className="fa fa-angle-right mr-2"></i>Our Features</Link>
                            <Link className="text-white" to="/contact"><i className="fa fa-angle-right mr-2"></i>Contact</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-primary mb-4">Popular Links</h4>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white mb-2" to="/login"><i className="fa fa-angle-right mr-2"></i>Member Login</Link>
                            <Link className="text-white mb-2" to="/register"><i className="fa fa-angle-right mr-2"></i>Register</Link>
                            <Link className="text-white mb-2" to="/services"><i className="fa fa-angle-right mr-2"></i>Services</Link>
                            <Link className="text-white" to="/blog"><i className="fa fa-angle-right mr-2"></i>Blog</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-primary mb-4">Opening Hours</h4>
                        <h5 className="text-white">Monday - Friday</h5>
                        <p>8.00 AM - 8.00 PM</p>
                        <h5 className="text-white">Saturday - Sunday</h5>
                        <p>2.00 PM - 8.00 PM</p>
                    </div>
                </div>
                <div className="container border-top border-dark pt-5">
                    <p className="m-0 text-center text-white">
                        &copy; <Link className="text-white font-weight-bold" to="#">Gym</Link>. All Rights Reserved. Designed by
                        <Link className="text-white font-weight-bold" to="#"> Ishita Giri</Link>
                    </p>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </>
    )
}

export default Footer