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

    public unicorns: Observable<Unicorn[]> = this.unicornService.list();

    constructor(private unicornService: UnicornsService) {
    }

}
