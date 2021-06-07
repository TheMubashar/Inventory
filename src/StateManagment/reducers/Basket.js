const basketReducer =(state ={basket:[], price:0}, action)=>{
    switch (action.type) {
      case "ADD_TO_BASKET":
        return{ 
            ...state,
            basket:[action.item,...state.basket],
            price: state.price + action.item.price
        };
        case "REMOVE_FROM_BASKET":
          const index = state.basket.findIndex(
            ({title})=> title === action.title
          );
          let newBasket=[...state.basket];
          let remaningPrice = 0;
          if(index>=0){
            newBasket.splice(index,1);
            remaningPrice = state.price.toFixed(2) - state.basket[index].price.toFixed(2);
          }else{
            console.warn('can not find this product');
          }
          return{ 
              ...state,
              basket: newBasket,
              price: remaningPrice
          };
      default:
        return state;
    }
};

export default basketReducer;