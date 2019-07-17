import {createAction, props} from '@ngrx/store';
import {Unicorn} from '../../models/unicorn.model';

export const removeFromMagasin = createAction(
    '[Magasin Action] Remove from Magasin',
    props<{ unicorn: Unicorn }>()
);
