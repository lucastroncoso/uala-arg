import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const settings = {
            dots: this.props.dots || false,
            infinite: this.props.infinite || false,
            slidesToShow: this.props.slidesToShow || 1.1,
            slidesToScroll: this.props.slidesToScroll || 1,
            autoplay: this.props.autoplay || false,
            autoplaySpeed: this.props.autoplaySpeed || 3500,
            pauseOnHover: this.props.pauseOnHover || false,
            accessibility: this.props.accessibility || false,
            arrows: this.props.arrows || false,

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


            <div className="">
                <Slider {...settings}>
                    {this.props.children}
                </Slider>
            </div>

        );
    }
}