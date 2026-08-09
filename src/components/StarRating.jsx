const StarRating = ({ rating }) => {

    let name = crypto.randomUUID();
    const roundRate = Math.round(rating);
    const checked1 = roundRate === 1;
    const checked2 = roundRate === 2;
    const checked3 = roundRate === 3;
    const checked4 = roundRate === 4;
    const checked5 = roundRate === 5;

    return (
        <div className="ratings">
            <div className="rating">
                <input type="radio" id="star5" disabled defaultChecked={checked5} name={name} value="5" />
                <label htmlFor="star5" />

                <input type="radio" id="star4" disabled defaultChecked={checked4} name={name} value="4" />
                <label htmlFor="star4" />

                <input type="radio" id="star3" disabled defaultChecked={checked3} name={name} value="3" />
                <label htmlFor="sta3" />

                <input type="radio" id="star2" disabled defaultChecked={checked2} name={name} value="2" />
                <label htmlFor="star2" />

                <input type="radio" id="star1" disabled defaultChecked={checked1} name={name} value="1" />
                <label htmlFor="star1" />

            </div>
        </div>

    );
}

export default StarRating;