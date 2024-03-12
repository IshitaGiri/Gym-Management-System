import React from 'react'
import Testimonial from "../Components/Testimonial"
import Layout from '../Common/Layout'
import { Link } from 'react-router-dom'

const Feature = () => {
    return (
        <>
            <Layout>
                {/* <!-- Page Header Start --> */}
                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Our Features</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Our Features</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}

                {/* <!-- GYM Feature Start --> */}
                <div className="container feature pt-5">
                    <div className="d-flex flex-column text-center mb-5">
                        <h4 className="text-primary font-weight-bold">Why Choose Us?</h4>
                        <h4 className="display-4 font-weight-bold">Benifits of Joining Our GYM</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-1.jpg" alt="Image" />
                                    <i className="flaticon-barbell"></i>
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Videos Instruction</h4>
                                    <p>Comprehensive instructional videos for effective workouts, ensuring proper form and maximizing results in the comfort of your home or gym.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-2.jpg" alt="Image" />
                                    <i className="flaticon-training"></i>
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Training Calendar</h4>
                                    <p>Organize your fitness journey with a structured training calendar, ensuring consistency and progress towards your goals with strategic workout planning.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-3.jpg" alt="Image" />
                                    <i className="flaticon-trends"></i>
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Free Apps & WiFi</h4>
                                    <p>Enjoy your workout with free apps and WiFi, enhancing your fitness experience at our facility with seamless connectivity and convenience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-4.jpg" alt="Image" />
                                    <i className="flaticon-support"></i>
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Community Support</h4>
                                    <p>Experience the strength of community support, fostering motivation and encouragement on your fitness journey for shared success and well-being.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- GYM Feature End --> */}

                <Testimonial />

            </Layout>
        </>
    )
}

export default Feature