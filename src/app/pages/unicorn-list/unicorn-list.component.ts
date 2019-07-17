import {Component} from '@angular/core';
import {UnicornsService} from '../../services/unicorns.service';
import {Unicorn} from '../../models/unicorn.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'uni-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

  // 1 public unicorns: Unicorn[];
  // 2 public unicorns: Observable<Unicorn[]>;
  public unicorns = this.unicornService.list();

  constructor(private unicornService: UnicornsService) {
    // 1 unicornService.list().subscribe(unicorns => this.unicorns = unicorns);
    // 2 this.unicorns = unicornService.list();
  }

  public like() {
    this.unicornService.like(0);
  }
}
