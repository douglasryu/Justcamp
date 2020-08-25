import React from "react";
import { connect } from "react-redux"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const ImageCarousel = (props) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        largerDesktop: {
            breakpoint: { max: 3000, min: 2500 },
            items: 3
        },
        largeDesktop: {
            breakpoint: { max: 2500, min: 2000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 3
        },
        smallerDesktop: {
            breakpoint: { max: 1024, min: 750 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 750, min: 650 },
            items: 3
        },
        largerMobile: {
            breakpoint: { max: 650, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };


    // if (props.products.length === 0) return null;

    return (
        <Carousel className="image__carousel" responsive={responsive} infinite>
            <img className="camp-header__image" src={`https://justcamp.s3.us-east-2.amazonaws.com/${parseInt(props.campId, 10) * 3 - 2}.jpg`} alt="featured-item" />
            <img className="camp-header__image" src={`https://justcamp.s3.us-east-2.amazonaws.com/${parseInt(props.campId, 10) * 3 - 1}.jpg`} alt="featured-item" />
            <img className="camp-header__image" src={`https://justcamp.s3.us-east-2.amazonaws.com/${parseInt(props.campId, 10) * 3}.jpg`} alt="featured-item" />
        </Carousel >
    );
}


export default ImageCarousel;

// const mapStateToProps = state => {
//     return {
//         // products: state.session.products
//         // products: Object.values(state.products)
//     }
// }


// export default connect(
//     // mapStateToPro    ps
// )(
//     ImageCarousel
// );
