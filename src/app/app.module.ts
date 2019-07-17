import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornCardComponent} from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import {HttpClientModule} from '@angular/common/http';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import * as fromCart from './store/reducers/cart.reducer';
import * as fromMagasin from './store/reducers/magasin.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        AppComponent,
        UnicornCardComponent,
        UnicornListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        StoreModule.forRoot({
            cart: fromCart.reducer,
            magasin: fromMagasin.reducer,
        }, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
