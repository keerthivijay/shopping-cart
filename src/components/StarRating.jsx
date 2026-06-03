function StarRating({rating}){

  console.log(rating);
    const roundRate = Math.round(rating);
    let checked1=false;
    let checked2=false
    let checked3=false
    let checked4=false;
    let checked5=false;
    let name = crypto.randomUUID();
    if(roundRate==1){
        checked1=true;
    } else if(roundRate==2){
        checked2=true;
    }else if(roundRate==3){
        checked3=true;
    }else if(roundRate==4){
        checked4=true;
    }else if(roundRate==5){
        checked5=true;
    }

    return(
        <div className="ratings">
            <div className="rating">
                <input type="radio" id="star5" disabled defaultChecked={checked5} name={name}  value="5" />
                <label htmlFor="star5" />

                <input type="radio" id="star4" disabled defaultChecked={checked4} name={name}  value="4" />
                <label htmlFor="star4" />

                <input type="radio" id="star3" disabled defaultChecked={checked3} name={name} value="3"/>
                <label htmlFor="sta3" />

                <input type="radio" id="star2" disabled defaultChecked={checked2} name={name}  value="2" />
                <label htmlFor="star2" />

                <input type="radio" id="star1" disabled defaultChecked={checked1} name={name} value="1" />
                <label htmlFor="star1" />

            </div>
        </div>

    );
}

export default StarRating;