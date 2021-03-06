import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/22.png'
import banner2 from '../../../images/24.png'
import banner3 from '../../../images/23.png'


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Royal Enfield Classic 350"
                    />
                    <Carousel.Caption style={{color:"goldenrod"}}>
                        <h3>Royal Enfield Classic 350</h3>
                        <p>Originally launched in 2009, this Royal Enfield vehicle has since managed to find its way into the bucket list for most prospective bike buyers.the 5-speed manual gearbox of the bike provides plenty of freedom to riders.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="KTM RC 125"
                    />

                    <Carousel.Caption style={{color:"goldenrod"}}>
                        <h3>KTM RC 125</h3>
                        <p>Originally, the bike was available in two primary colours. However, with the BS-VI variant rollout, KTM is offering three new livery colour options as well.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{color:"goldenrod"}}>
                        <h3>TVS Apache RTR 160</h3>
                        <p>The last name on the list is the Apache RTR 160 from TVS. In February 2020, the bike sold 32033 units. The single-cylinder, air-cooled and fuel-injected engine can generate a peak torque of 13.9Nm. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;