import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchTestimonialData } from '../Redux/TestimonialSlice';

const Testimonial = () => {
    const { testimonial_data } = useSelector((state) => state?.testimonial);
    console.log('a', testimonial_data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchTestimonialData());
    }, [dispatch]);
    
    return (
        <>
            {/* <!-- Testimonial Start --> */}
            <div className="container-fluid position-relative testimonial my-5">
                <div className="container">
                    <div className="row px-3 align-items-center">
                        <div className="col-md-6 bg-secondary">
                            <div className="d-flex align-items-center px-3" style={{ minHeight: '450px' }}>
                                <div id="carouselId" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselId" data-slide-to="1"></li>
                                        <li data-target="#carouselId" data-slide-to="2"></li>
                                        <li data-target="#carouselId" data-slide-to="3"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        {testimonial_data?.data?.map((item, key) => (
                                            <div className={`carousel-item ${key === 0 ? 'active' : ''}`} >
                                                <div className="d-flex align-items-center mb-4 text-white">
                                                    <img width="80" height="80" className="rounded-circle bg-dark p-2" src={`https://corefitserver.onrender.com/${item.image}`} alt="Image" />
                                                    <div className="pl-4">
                                                        <h4 className="text-primary">{item.client_name}</h4>
                                                        <p className="m-0">Profession</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                                    {item.review}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pl-md-3 d-none d-md-block">
                                <h4 className="text-primary">Testimonial</h4>
                                <h4 className="display-4 mb-4 text-white font-weight-bold">What Our Clients Say?</h4>
                                <p class="m-0 text-white">Discover firsthand experiences through our testimonials. Clients share success stories, praising our effective programs, expert guidance, and transformative impact on their fitness journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
        </>
    )
}

export default Testimonial