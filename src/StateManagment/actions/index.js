export const addToBasket = (item)=>{
    return{
        type:"ADD_TO_BASKET",
        item
    };
};

export const removeFromBasket = (title)=>{
    return{
        type:"REMOVE_FROM_BASKET",
        title
    };
};

export const addUser = (user)=>{
    return{
        type:"SET_USER",
        user
    };
};
