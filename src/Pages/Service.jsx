import React, { useEffect } from 'react'
import { FetchServiceData } from '../Redux/ServiceSlice';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Common/Layout';
import { Link } from 'react-router-dom';

const Service = () => {
    const { service_data } = useSelector((state) => state?.service);
    console.log('a', service_data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchServiceData());
    }, [dispatch]);

    const getTrainerName = (trainerId) => {
        const Trainer = service_data?.data?.find((service) => service.trainerId === trainerId);
        return Trainer ? (Trainer?.trainer_details[0]?.name) : 'Uncategorized';
    }
    console.log('b', getTrainerName());

    return (
        <>
            <Layout>
                {/* <!-- Page Header Start --> */}
                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">GYM Services</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Services</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}
                <div className="container pt-5 team">
                    <div className="d-flex flex-column text-center mb-5">
                        <h4 className="text-primary font-weight-bold">Our Services</h4>
                        <h4 className="display-4 font-weight-bold">Choose From Our Services</h4>
                    </div>
                    <div className="row">
                        {service_data?.data?.map((item, key) => (
                            <div className="col-lg-4 col-md-6 mb-5" key={key}>
                                <div className="card border-0 bg-secondary text-center text-white">
                                    <img className="card-img-top" src={`https://corefitserver.onrender.com/${item.image}`} alt="" />
                                    <div className="card-social d-flex align-items-center justify-content-center">
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                    <div className="card-body bg-secondary">
                                        <h4 className="card-title text-primary">{item.service_name}</h4>
                                        <p className="card-text"  style={{ fontSize: "20px" }}>Trainer: <span style={{ fontWeight: 700 }}>{getTrainerName(item.trainerId)}</span></p>
                                        <Link to={`/serviceDetails/${item._id}`} className="btn btn-lg btn-outline-light mt-2 px-4">Explore</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Service