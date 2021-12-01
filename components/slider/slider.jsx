import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 1.1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3500,
            pauseOnHover: true,
            accessibility: false,
            arrows: false,

            // responsive: [
            //     {
            //         breakpoint: 600,
            //         settings: {
            //             slidesToShow: 1,
            //             slidesToScroll: 1,
            //             initialSlide: 2,
            //             dots: true

            //         }
            //     }
            // ]
        };
        return (


            <div className="bg-red-250">
                <Slider {...settings}>
                    {this.props.children}
                </Slider>
            </div>

        );
    }
}