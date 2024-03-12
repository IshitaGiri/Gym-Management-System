import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddServiceDetailsData } from '../Redux/ServiceDetailsSlice';
import Layout from '../Common/Layout'
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id } = useParams()
    const { servicedetails_data } = useSelector((state) => state?.serviceDetails);
    console.log('serviceDetails', servicedetails_data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(AddServiceDetailsData(_id));
    }, [dispatch]);
    
    return (
        <>
            <Layout>
                {/* <!-- Page Header Start --> */}
                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Service Detail Page</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Service Detail</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}

                <div className="container py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: '100px', height: '100px' }}>
                                    <span>01</span>
                                    <strong className="text-uppercase m-0 text-white">Jan</strong>
                                    <span>2045</span>
                                </div>
                                <div className="pl-3">
                                    <h1 className="font-weight-bold mb-3">{servicedetails_data?.data?.data.service_name}</h1>
                                </div>
                            </div>

                            <img className="w-50 float-left mr-4 mb-3" src={`https://corefitserver.onrender.com/${servicedetails_data?.data?.data.image}`} alt="Image" />
                            <p style={{ fontFamily: 'serif', fontWeight: 'bold' }}>{servicedetails_data?.data?.data.service_description}</p>
                        </div>

                        <Link to={`/joining/${servicedetails_data?.data?.data._id}`} className="btn btn-lg px-4 btn-outline-primary">Join Now</Link>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ServiceDetails