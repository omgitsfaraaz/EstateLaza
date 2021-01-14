import React from 'react';
import imageOne from '../images/img-1.jpg';
import imageTwo from '../images/img-2.jpg';
import imageThree from '../images/img-3.jpg';
import imageFour from '../images/img-4.jpg';
import imageFive from '../images/img-5.jpg';
import imageSix from '../images/img-6.jpg';
import imageSeven from '../images/img-7.jpg';
import '../App.css';

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
                    <img className="services-cell_img" alt="" src={imageTwo} />
                    <div className="services-cell_text">Sales</div>
                </div>
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src={imageThree} />
                    <div className="services-cell_text">Brokerage</div>
                </div>
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src={imageFour} />
                    <div className="services-cell_text">Property Management</div>
                </div>
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src={imageFive} />
                    <div className="services-cell_text">Lending</div>
                </div>
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src={imageSix} />
                    <div className="services-cell_text">Professional Services</div>
                </div>
                <div className="services-cell">
                    <img className="services-cell_img" alt="" src={imageSeven} />
                    <div className="services-cell_text">Marketing</div>
                </div>
            </div>
        </div>
    )
}

export default Services;
