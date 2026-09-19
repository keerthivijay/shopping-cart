import { useRef } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {

    const mainImage = useRef();
    const allImage = useRef();

    const handleClick = (e) => {
        if(e.target.src==null) return;
        mainImage.current.src = e.target.src;

        allImage.current.querySelector(".image-gallery__image--active").classList.remove("image-gallery__image--active");
        e.target.classList.add("image-gallery__image--active");
    }

    return (
        <div className="image-gallery">
            <div className="image-gallery__images">
                <div className="image-gallery__slider-wrap">
                    <div className="image-gallery__slider" ref={allImage} onClick={handleClick}>
                        {images.map((img, index) => (
                            <img src={img} key={index} className={index===0?`image-gallery__image image-gallery__image--active`:`image-gallery__image`} />
                        ))}
                    </div>
                </div>
                <img src={images[0]} ref={mainImage} className="image-gallery__main-image" id="main-image" />
            </div>
        </div>
    );
}

export default ImageGallery;