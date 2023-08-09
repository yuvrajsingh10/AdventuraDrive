import React,{useReducer,useEffect} from "react";

export const  FavoriteCarContext = React.createContext({
  liked:false,
  favCar:[],
  addFavoriteCar:()=>{},
  removeFavoriteCar:()=>{}
})

const initValue ={
  favCar:[],
  totalQuantity:0,
} 

const FavCarReducer=(state,action)=>{
  if(action.type==="ADD_FAVORITE_CAR"){
    console.log(state);
  }
  return state;
}

export default function FavoriteCarProvider (props){
  const [favoriteCar,dispatch]=useReducer(FavCarReducer,initValue);

  function addFavoriteCar(action){
    console.log(action)
    dispatch({type:"Add_FAVORITE_CAR",add:action})
  }
  function removeFavoriteCar(action){
    dispatch({type:"REMOVE_FAVORITE_CAR",remove:action});
  }
  const FavCar={
    favCar:favoriteCar?.favCar,
    totalQuantity:favoriteCar?.favCar,
    add:addFavoriteCar  ,
    remove:removeFavoriteCar,
  }
  return (
    <FavoriteCarContext.Provider value={FavCar}>
      {props.children}
    </FavoriteCarContext.Provider>
  )
}

