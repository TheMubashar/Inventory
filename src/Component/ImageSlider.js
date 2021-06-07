import React, {useState} from 'react'
import {SliderData} from "./SliderData"
import "./imageSlider.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ImageSlider({slides}) {
    const [image, setimage] = useState(0);
    const length = slides.length
    const nextSlide = ()=>{
        setimage(image === length-1 ? 0 : image + 1)
    }
    const prevSlide = ()=>{
        setimage(image === 0 ? length-1 : image - 1)
    }
    if(!Array.isArray(slides) || slides.length<=0){
        return null;
    }
    return (
        <div className="slider">
        <ArrowBackIosIcon className="leftArrow" onClick={prevSlide}/>
        <ArrowForwardIosIcon className="rightArrow" onClick={nextSlide}/>
            {SliderData.map((slide,index)=>{
               return (
               <div className={index === image ? 'slide active': 'slide'} key={index}>
                   {index===image && (<img className="sliderImage" src={slide.image} alt="Home Image"/>)}
                    
               </div>
               )
            })}
        </div>
    )
}

export default ImageSlider
