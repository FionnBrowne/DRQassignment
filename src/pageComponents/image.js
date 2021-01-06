import React from 'react';

import Carousel from 'react-bootstrap/Carousel'
//export class so it can be used in different locations
export class Image extends React.Component {

    render() {
        return (

            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            width={800} height={350} alt="900x500" src="https://media.product.which.co.uk/prod/images/794_397/gm-d48aab65-90c6-4cda-a408-2d9b6340ae97-different-sized-weights-487223.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 style={{ color: "" }}>Weights</h2>
                            <p style={{ color: "red" }}>Will help to develop specific muscle groups</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            width={800} height={350} alt="900x500" src="https://cdn.prod.openfit.com/uploads/2018/06/13120002/What-Is-Cardio1-1.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2 style={{ color: "red" }}>Cardio</h2>
                            <p style={{ color: 'red' }}>Is key to building up stamina</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            width={800} height={350} alt="900x500" src="https://thumbs.dreamstime.com/b/set-natural-products-isolated-white-background-healthy-food-collage-wide-photo-free-space-text-panoramic-174470643.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2 style={{ color: "black" }}>Diet</h2>
                            <p style={{ color: "black" }}>Key to weight loss and better health</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>

        );
    }
}