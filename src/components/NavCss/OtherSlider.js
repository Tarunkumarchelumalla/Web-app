import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function OtherSlider() {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 active"
                        src="https://i.imgur.com/gDKlNvb.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/2Hr4uBc.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/r5WXD0A.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
