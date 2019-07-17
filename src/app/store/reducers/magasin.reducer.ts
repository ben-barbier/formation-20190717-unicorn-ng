import {Action, createReducer, on} from '@ngrx/store';
import {Unicorn} from '../../models/unicorn.model';
import * as MagasinActions from '../actions/magasin.actions';

export const initialState: Unicorn[] = [];

const magasinReducer = createReducer(
    initialState,
    on(MagasinActions.removeFromMagasin, (state, action): Unicorn [] => {
        return [...state].filter(u => u.id !== action.unicorn.id);
    }),
);

export function reducer(state: Unicorn[] | undefined, action: Action) {
    return magasinReducer(state, action);
}
