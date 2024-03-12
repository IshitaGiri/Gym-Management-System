import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchTrainerData } from '../Redux/TrainerSlice';

const Trainer = () => {
    const { trainer_data } = useSelector((state) => state?.trainer);
    console.log('a', trainer_data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchTrainerData());
    }, [dispatch]);

    return (
        <>
            {/* <!-- Team Start --> */}
            <div className="container pt-5 team">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-primary font-weight-bold">Our Trainers</h4>
                    <h4 className="display-4 font-weight-bold">Meet Our Expert Trainers</h4>
                </div>
                <div className="row">
                    {trainer_data?.data?.map((item, key) => (
                        <div className="col-lg-4 col-md-6 mb-5" key={key}>
                            <div className="card border-0 bg-secondary text-center text-white">
                                <img className="card-img-top" src={`https://corefitserver.onrender.com/${item.image}`} style={{ maxHeight: '420px', minHeight: '420px' }} alt="" />
                                <div className="card-social d-flex align-items-center justify-content-center">
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="card-body bg-secondary">
                                    <h4 className="card-title text-primary">{item.name}</h4>
                                    <p className="card-text">{item.speciality}</p>
                                    <p className="card-text">{item.experience}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <!-- Team End --> */}
        </>
    )
}

export default Trainer