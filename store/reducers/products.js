import PRODUCTS from "../../data/dummy-data";


const initialState = {
    availableProducts: PRODUCTS,
    userProducts : PRODUCTS.filter(product=>product.ownerId === 'u1')
};

const products = (state=initialState, action) => {
    return state;
}

export default products ;