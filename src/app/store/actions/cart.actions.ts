import {createAction, props} from '@ngrx/store';
import {Unicorn} from '../../models/unicorn.model';

export const addToCart = createAction(
    '[Cart Action] Add to Cart',
    props<{ unicorn: Unicorn }>()
);

export const removeFromCart = createAction(
    '[Cart Action] Remove from Cart',
    props<{ unicorn: Unicorn }>()
);
