import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';



import { CartReducer } from './reducers/CartReducer';
import { getProductDetailsReducer, getProductsReducer } from './reducers/ProductReducer';

const reducer = combineReducers({
    cart: CartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
  });
  
  const middleware = [thunk];
  
 
  

  
  const store = createStore(
    reducer,
    
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;