import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unicorn} from '../models/unicorn.model';

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

  public logCoucou(){
    console.log('Coucou 🐱‍👤🐱‍👤');
    this.displayAlert.emit('Alert !!! 👻👻');
  }
}
