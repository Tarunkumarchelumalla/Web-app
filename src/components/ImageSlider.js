//rafce
import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {                                       //image display using .map array fn
    const [current, setCurrent] = useState(0)
    const length = slides.length

    //next, cycle of image reset code
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    //prev
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    //console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (

        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((item, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key = {index}>

                    {index === current && (<img src={item.image} alt='nursery' className='image' />)}                    
                        
                    </div>
                )


            })
            }
        </section>
    )
}

export default ImageSlider

