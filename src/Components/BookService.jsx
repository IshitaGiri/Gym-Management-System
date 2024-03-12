import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../Common/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { AddServiceDetailsData } from '../Redux/ServiceDetailsSlice';
import { FetchBookingDetails } from '../Redux/DasboardSlice';
import { booking } from '../Redux/BookServiceSlice';

const BookService = () => {
    const { servicedetails_data } = useSelector((state) => state?.serviceDetails);
    console.log(servicedetails_data?.data?.data?.bookings);
    const { _id } = useParams();

    const dispatch = useDispatch();
    const name = localStorage.getItem('name');
    const memberId = localStorage.getItem('_id');
    const email = localStorage.getItem('email');
    const serviceName = servicedetails_data?.data?.data?.service_name
    console.log(serviceName);
    const [scheme, setScheme] = useState();
    const [price, setPrice] = useState('0');
    const serviceId = _id
    console.log(memberId, "price")

    useEffect(() => {
        if (serviceId) {
            switch (scheme) {
                case "Yearly":
                    setPrice("12000");
                    break;
                case "Half-yearly":
                    setPrice("8000");
                    break;
                case "Quarterly":
                    setPrice("3500");
                    break;
                default:
                    setPrice("0")
            }
        }
    }, [scheme, price]);

    useEffect(() => {
        dispatch(AddServiceDetailsData(_id));
    }, [_id]);

    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(booking({ name, email, scheme, price, serviceId, memberId }));

        dispatch(FetchBookingDetails(memberId));
        // navigate(`/dashboard`);
        navigate(`/dashboard/${memberId}`)
    }
    
    return (
        <>
            <Layout>
                {/* <!-- Page Header Start --> */}
                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Service Booking</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Service Booking</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}
                <div className="container gym-class mb-5 mt-5">
                    <div className="row px-3">
                        <div className="col-md-6 p-0">
                            <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-4 px-5">
                                <i className="flaticon-six-pack"></i>
                                <h3 className="display-4 mb-3 text-white font-weight-bold">Connect With Us To Achieve Ultimate Fitness Goal</h3> <br />
                                <p style={{ minHeight: '152px' }}>
                                    Embark on a transformative fitness journey with us! Connect with our dedicated team to achieve your ultimate fitness goal. We provide personalized guidance, cutting-edge workouts, and unwavering support. Join our community and embrace a healthier, stronger you. Your fitness aspirations are within reach – let's make them a reality together!
                                </p>
                                {/* <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a> */}
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="gym-class-box d-flex flex-column align-items-start justify-content-center text-left text-white py-8 px-6">
                                <i className="flaticon-bodybuilding"></i>
                                <h3 className="display-4 mb-3 font-weight-bold">Book Your Service Today</h3>
                                <h5 className="text-primary text-capitalize m-0">Start Your {serviceName} Journey Now</h5>
                                <div className="contact-form">
                                    <div id="success"></div>
                                    <form name="sentMessage" id="contactForm" noValidate="noValidate" onSubmit={(e) => handleSubmit(e)} style={{ minWidth: '500px' }}>
                                        <div className="control-group">
                                            <input type="hidden" value={memberId} readOnly className="form-control" id="name" placeholder="Your Name" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" value={name} readOnly className="form-control" id="name" placeholder="Your Name" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="email" value={email} readOnly className="form-control" id="email" placeholder="Your Email" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="hidden" value={servicedetails_data?.data?.data?._id} name='serviceId' className="form-control" id="training" placeholder="Your Training" />
                                            <p className="help-block text-danger"></p>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" value={servicedetails_data?.data?.data?.service_name}
                                                name='service_name' className="form-control" id="training" placeholder="Your Training" />
                                            <p className="help-block text-danger"></p>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <select className="form-control mb-2"
                                                name="scheme"
                                                value={scheme}
                                                onChange={(e) => setScheme(e.target.value)}>
                                                <option value="" >Select Your Scheme</option>
                                                <option value="Yearly">Yearly</option>
                                                <option value="Half-yearly">Half-yearly</option>
                                                <option value="Quarterly">Quarterly</option>
                                            </select>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input
                                                type="text"
                                                name='price'
                                                value={price}
                                                className="form-control"
                                                id="price"
                                                placeholder="Price"
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Book Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default BookService