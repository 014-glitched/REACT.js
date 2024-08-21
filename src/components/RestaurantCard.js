import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => { //or we can write ({resName, cuisine}) => {} it is like destructuring and to understand this we can write it as const{resName, cusine} = props; and pass props as argument like it is passed above
    const{ resData }  = props;
    // console.log(resData);

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
                data-testid="resCard" className="m-4 p-4 w-[200px] rounded-lg h-auto bg-gray-100 hover:bg-slate-400" >
               <img
               className=" rounded-md" src={CDN_URL + cloudinaryImageId } alt="Biryani"/>

               <h3 className="font-bold py-3 text-lg">{name}</h3>
               <h4>{cuisines.join(', ')}</h4>
               <h4>{avgRating} stars</h4>
               <h4>{costForTwo}</h4>
               <h4>{sla.slaString}</h4>
               </div>
            );
};

//Higher Order Components

// Input - Restaurant Card ==> RestaurantCardPromoted(output)
//It will return a new component with a promoted label on it and a component is a function that return some piece of JSX

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => { //this is used to make a component
//     return(
//         <div>
//           <label >Promoted</label>
//           <RestaurantCard {...props}/>
//         </div>
//     )
//   }
// }

export default RestaurantCard;




//data-testid="resCard" for each restaurant we will get id as resCard and now we can target resCard according to what we pass inside our testing.