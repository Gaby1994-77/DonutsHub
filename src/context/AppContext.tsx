import React, {createContext, useReducer, useContext, ReactNode} from 'react';

interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number | string;
  quantity: number;
}

interface AppState {
  cart: CartItem[];
}

interface AppAction {
  type: string;
  payload: CartItem;
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({state: {cart: []}, dispatch: () => null});

const initialState: AppState = {
  cart: [],
};

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'INCREMENT_ITEM':
      const existingIndex = state.cart.findIndex(
        item => item.id === action.payload.id,
      );
      let updatedCart = [...state.cart];
      if (existingIndex >= 0) {
        const updatedItem = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + 1,
        };
        updatedCart[existingIndex] = updatedItem;
      } else {
        updatedCart.push({...action.payload, quantity: 1});
      }
      return {...state, cart: updatedCart};
    case 'DECREMENT_ITEM':
      const existingItemIndex = state.cart.findIndex(
        item => item.id === action.payload.id,
      );
      if (existingItemIndex >= 0) {
        let updatedCart = [...state.cart];
        if (updatedCart[existingItemIndex].quantity > 0) {
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantity: updatedCart[existingItemIndex].quantity - 1,
          };
          return {...state, cart: updatedCart};
        }
      }
      return state;
    case 'REMOVE_ITEM':
      const filteredCart = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      return {...state, cart: filteredCart};
    case 'RESET_CART':
      return {...state, cart: []};
    default:
      return state;
  }
}

export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
