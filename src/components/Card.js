import {AiFillStar} from "react-icons/ai";
import {BsFillBagHeartFill} from "react-icons/bs";

function Card({img, title, stars, reviews, newPrice, prevPrice}) {
    
    const starComponents = Array(stars).fill().map((_, index) => (
        <AiFillStar key={index} className="ratings-star" />
      ));

    return (
        <section className="card">
            <img src={img} alt={title} className="card-img"/>
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <section className="card-reviews">
                    {starComponents}
                    <span className="total-reviews">{reviews} reviews</span>
                </section>
                <section className="card-price">
                    <div className="price">
                        <del className="previous-price">{prevPrice}</del>
                        {newPrice}
                    </div>

                    <div className="bag">
                        <BsFillBagHeartFill className="bag-icon"/>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Card;
