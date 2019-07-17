import {Component} from '@angular/core';
import {AppState} from './store/app.state';
import {Store} from '@ngrx/store';

@Component({
    selector: 'uni-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public like = 0;

    constructor(store: Store<AppState>) {
        // cartService.cart.subscribe(cart => this.like = cart.length);
        store.select('cart').subscribe(cart => this.like = cart.length);
    }

}
