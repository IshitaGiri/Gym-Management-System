import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../Common/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../Redux/AuthSlice';

const initialState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    answer: "",
    image: "",
}

const Register = () => {
    const { redirectTo } = useSelector((state) => state?.auth);
    const [user, setUser] = useState(initialState)
    const [img, setImg] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const onSubmitInfo = (data) => {
        data.preventDefault()
        let formdata = new FormData()
        formdata.append("name", user.name)
        formdata.append("email", user.email)
        formdata.append("password", user.password)
        formdata.append("phone", user.phone)
        formdata.append("answer", user.answer)
        formdata.append("image", img)
        dispatch(register(formdata));
        // navigate('/login') 
    };

    useEffect(() => {
        const redirectUser = () => {
            let name = localStorage.getItem("name")
            let isInLoginPage = window.location.pathname.toLowerCase() === "/register";
            if (name !== null && name !== undefined && name !== "") {
                isInLoginPage && navigate("/login");
            }
        }
        redirectUser();
    }, [redirectTo]);


    return (
        <>
            <Layout>
                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Register</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Register</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid position-relative bmi my-5" style={{ marginLeft: '200px' }}>
                    <div className="container">
                        <div className="row px-3 align-items-center">
                            <div className="col-md-6">
                                <div className="pr-md-3 d-none d-md-block">
                                    <h4 className="text-primary">Start Your Journey</h4>
                                    <h4 className="display-4 text-white font-weight-bold mb-4">
                                        Register
                                    </h4>
                                    <p className="m-0 text-white">
                                        We're thrilled to welcome you to our Website, where exciting opportunities await! To kick off your journey, we need a few details to personalize your experience. Let's make it official by creating your account.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 bg-secondary py-5">
                                <div className="py-5 px-3">
                                    <h4 className="mb-4 text-white">Come and Join us!</h4>
                                    <h1 className="mb-4 text-white">Register</h1>
                                    <form onSubmit={onSubmitInfo}>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                    type="text" name="name"
                                                    value={user.name}
                                                    onChange={e => handleChange(e)}
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                    type="email" name="email"
                                                    value={user.email}
                                                    onChange={e => handleChange(e)}
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Email"
                                                />
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                    type="password" name="password"
                                                    value={user.password}
                                                    onChange={e => handleChange(e)}
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Password"
                                                />
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                    type="text" name="phone"
                                                    value={user.phone}
                                                    onChange={e => handleChange(e)}
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Phone"
                                                />
                                            </div>
                                            <div className="col form-group">
                                                <input
                                                    type="text" name="answer"
                                                    value={user.answer}
                                                    onChange={e => handleChange(e)}
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Answer"
                                                />
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                    type="file"
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Image"
                                                    name="photo"
                                                    accept="image/*"
                                                    onChange={(e) => setImg(e.target.files[0])}

                                                />
                                            </div>
                                            {img !== "" && img !== undefined && img !== null ? (
                                                <img
                                                    style={{ height: "180px" }}
                                                    src={URL.createObjectURL(img)}
                                                    alt=""
                                                    className="upload-img"
                                                />
                                            ) : (
                                                <>
                                                    {img === "" && <p>Drag or drop content here</p>}
                                                </>
                                            )}

                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                                <button

                                                    type="submit"
                                                    className="btn btn-lg btn-block btn-dark border-light"
                                                    value="Register"
                                                >Register</button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="m-0 text-white mt-4" >Already have an account? <Link to='/login'>Log In</Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Register