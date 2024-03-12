import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/AuthSlice';

const Header = () => {
    const { LogoutToggle } = useSelector((state) => state?.auth);
    const name = localStorage.getItem("name");
    // const token = localStorage.getItem("token");
    // const proimg = localStorage.getItem("image")
    // console.log(proimg, "image")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = (e) => {
        e.preventDefault()
        dispatch(logout())
        navigate("/login")
        // toast.success("Loggedout Successfully")
    }

    return (
        <>
            {/* <!-- Navbar Start --> */}
            <div className="container-fluid p-0 nav-bar">
                <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                    <Link to="" className="navbar-brand">
                        <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">CORE FIT</h1>
                    </Link>
                    <i className="flaticon-weightlifting display-3 text-primary" />

                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto p-4 bg-secondary">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About Us</NavLink>
                            <NavLink to="/feature" className="nav-item nav-link">Our Features</NavLink>
                            <NavLink to="/services" className="nav-item nav-link">Services</NavLink>
                            <NavLink to="/blog" className="nav-item nav-link">Blog</NavLink>
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                            {LogoutToggle ? (
                                <>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Welcome Member</a>
                                        <div className="dropdown-menu text-capitalize">
                                            <Link className="dropdown-item" to={`/dashboard/${localStorage.getItem('_id')}`}>{name}</Link>
                                            <Link className="dropdown-item" style={{ textDecoration: "none" }} onClick={logOut}>Logout<i className="fas fa-sign-out-alt"></i></Link>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <NavLink to="/login" className="nav-item nav-link">Member Login</NavLink>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- Navbar End --> */}
        </>
    )
}

export default Header