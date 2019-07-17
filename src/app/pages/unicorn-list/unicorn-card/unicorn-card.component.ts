import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unicorn} from '../../../models/unicorn.model';
import {AppState} from '../../../store/app.state';
import {Store} from '@ngrx/store';
import {addToCart} from '../../../store/actions/cart.actions';
import {removeFromMagasin} from '../../../store/actions/magasin.actions';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent {

    @Input()
    public unicorn: Unicorn;

    @Output()
    public displayAlert = new EventEmitter<string>();

    public like(): void {
        this.store.dispatch(addToCart({unicorn: this.unicorn}));
        // this.cartService.cart.next([...this.cartService.cart.getValue(), this.unicorn]);
    }

    constructor(private store: Store<AppState>) {
    }

    public removeFromMagasin() {
        this.store.dispatch(removeFromMagasin({unicorn: this.unicorn}));
    }
}
