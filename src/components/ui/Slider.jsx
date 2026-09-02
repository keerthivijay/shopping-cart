import { Link } from 'react-router';

import './Slider.css'

const Slider = () => {

    return(
        <div class="slideshow-container">
            <div class="slide-wrapper">
                <div class="slide">
                    <img src="./src/assets/banner.jpg" alt="Mountain View" />
                </div>
                <div class="slide">
                    <img src="./src/assets/banner-2.jpg" alt="Autumn Forest" />
                </div>
                <div class="slide">
                    <img src="./src/assets/banner-3.jpg" alt="Rocky Shore" />
                </div>
            </div>
        </div>
    );
}

export default Slider;