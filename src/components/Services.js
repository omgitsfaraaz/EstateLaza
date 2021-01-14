import React from 'react';
import imageOne from '../images/img-1.jpg';

const Services = () => {
    return (
        <div className="services-section">
            <div className="services-heading">
                <h1>Check out our services below!</h1>
            </div>

            <div className="services">
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src={imageOne} />
                    <div className="services-cell_text">Development</div>
                </div>
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src="" />
                    <div className="services-cell_text">Sales</div>
                </div>
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src="" />
                    <div className="services-cell_text">Brokerage</div>
                </div>
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src="" />
                    <div className="services-cell_text">Property Management</div>
                </div>
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src="" />
                    <div className="services-cell_text">Lending</div>
                </div>
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src="" />
                    <div className="services-cell_text">Professional Services</div>
                </div>
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src="" />
                    <div className="services-cell_text">Marketing</div>
                </div>
            </div>
        </div>
    )
}

export default Services;
