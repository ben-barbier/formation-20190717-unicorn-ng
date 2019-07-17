import {Action, createReducer, on} from '@ngrx/store';
import {Unicorn} from '../../models/unicorn.model';
import * as CartActions from '../actions/cart.actions';
import * as MagasinActions from '../actions/magasin.actions';

export const initialState: Unicorn[] = [];

const cartReducer = createReducer(
    initialState,
    on(CartActions.addToCart, (state, action) => [...state, action.unicorn]),
    on(CartActions.removeFromCart, (state, action): Unicorn [] => {
        return [...state].filter(u => u.id !== action.unicorn.id);
    }),
    on(MagasinActions.removeFromMagasin, (state, action): Unicorn [] => {
        return [...state].filter(u => u.id !== action.unicorn.id);
    }),
);

export function reducer(state: Unicorn[] | undefined, action: Action) {
    return cartReducer(state, action);
}
