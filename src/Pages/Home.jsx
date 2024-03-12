import React, { useEffect } from 'react'
import Layout from '../Common/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { FetchHomeData } from '../Redux/HomeSlice';
import Trainer from '../Components/Trainer';
import Testimonial from '../Components/Testimonial';
import { Link } from 'react-router-dom';

const Home = () => {
    const { home_data } = useSelector((state) => state?.home);
    console.log('a', home_data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchHomeData());
    }, [dispatch]);

    return (
        <>
            <Layout>
                {/* <!-- Carousel Start --> */}
                <div className="container-fluid p-0">
                    <div id="blog-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {home_data?.data?.slice(0, 2).map((item, key) => (
                                <div className={`carousel-item ${key === 0 ? 'active' : ''}`}>
                                    <img className="w-100" src={`https://corefitserver.onrender.com/${item.image}`} alt="Image" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <h3 className="text-primary text-capitalize m-0">{item.subtitle}</h3>
                                        <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">{item.title}</h2>
                                        <Link to="/services" className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
                {/* <!-- Carousel End --> */}

                {/* <!-- Gym Class Start --> */}
                <div className="container gym-class mb-5">
                    <div className="row px-3">
                        <div className="col-md-6 p-0">
                            <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                                <i className="flaticon-six-pack"></i>
                                <h3 className="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                                <p>
                                    Bodybuilding in the gym involves targeted resistance training to sculpt and strengthen muscles. It focuses on progressive overload, nutrition, and rest for optimal muscle development, enhancing physique, and overall well-being.
                                </p>
                                <Link to="/services" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</Link>
                            </div>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                                <i className="flaticon-bodybuilding"></i>
                                <h3 className="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                                <p>
                                    Muscle building in the gym is a process of stimulating and repairing muscle fibers through resistance training. It involves progressive workouts, adequate protein intake, and recovery for muscle growth and strength.
                                </p>
                                <Link to="/services" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Gym Class End --> */}

                {/* <!-- About Start --> */}
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid mb-4 mb-lg-0" src="img/aboutt.jpg" style={{ width: '550px', height: '520px' }} alt="Image" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-4 font-weight-bold mb-4">10 Years Experience</h2>
                            <p>
                                With a decade of expertise, our gym center offers top-tier fitness solutions, expert guidance, and a transformative experience for lasting wellness.</p>
                            <div className="row py-2">
                                <div className="col-sm-6">
                                    <i className="flaticon-barbell display-2 text-primary"></i>
                                    <h4 className="font-weight-bold">Certified GYM Center</h4>
                                    <p>Certified gym center, delivering excellence in fitness with professional expertise.</p>
                                </div>
                                <div className="col-sm-6">
                                    <i className="flaticon-medal display-2 text-primary"></i>
                                    <h4 className="font-weight-bold">Award Winning</h4>
                                    <p>Award-winning, setting the standard for excellence in every fitness endeavor.</p>
                                </div>
                            </div>
                            <Link to="/services" className="btn btn-lg px-4 btn-outline-primary">Learn More</Link>
                        </div>
                    </div>
                </div>
                {/* <!-- About End --> */}

                {/* <!-- Features Start --> */}
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-lg-4 p-0">
                            <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: '300px' }}>
                                <i className="flaticon-training display-3 text-primary mr-3"></i>
                                <div className="">
                                    <h2 className="text-white mb-3">Progression</h2>
                                    <p>Consistent effort, gradual intensity increase, and dedication lead to satisfying and sustainable gym progression.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="d-flex align-items-center bg-primary text-white px-5" style={{ minHeight: '300px' }}>
                                <i className="flaticon-weightlifting display-3 text-secondary mr-3"></i>
                                <div className="">
                                    <h2 className="text-white mb-3">Workout</h2>
                                    <p>Engage in a fulfilling workout for a healthier body, increased energy, and enhanced well-being.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: '300px' }}>
                                <i className="flaticon-treadmill display-3 text-primary mr-3"></i>
                                <div className="">
                                    <h2 className="text-white mb-3">Nutrition</h2>
                                    <p>Optimize performance and health with balanced nutrition, essential for fueling workouts and supporting overall well-being.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Features End --> */}

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

                <Trainer />
                <Testimonial />

            </Layout>
        </>
    )
}

export default Home