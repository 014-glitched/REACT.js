import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => { //or we can write ({resName, cuisine}) => {} it is like destructuring and to understand this we can write it as const{resName, cusine} = props; and pass props as argument like it is passed above
    const{ resData}  = props;

    const {
      cloudinaryImageId,
              name,
              cuisines,
              avgRating,
              costForTwo,
              sla,
            } = resData?.info;
    
       return (
              <div
                className="res-card"
                style={{ backgroundColor: '#f0f0f0',}}>
               <img
               className="res-logo" src={CDN_URL + cloudinaryImageId } alt="Biryani"/>

               <h3>{name}</h3>
               <h4>{cuisines.join(', ')}</h4>
               <h4>{avgRating} stars</h4>
               <h4>{costForTwo}</h4>
               <h4>{sla.slaString}</h4>
               </div>
            );
};

export default RestaurantCard;