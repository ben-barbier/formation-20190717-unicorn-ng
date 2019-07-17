import {Component, Output} from '@angular/core';
import {Unicorn} from './models/unicorn.model';

@Component({
  selector: 'uni-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'unicorn-ng';

  public like = 0;

  constructor() {
    Promise.all([
      fetch('https://raw.githubusercontent.com/ben-barbier/unicorn-back-data/master/unicorns.json').then(e => e.json()),
      fetch('https://raw.githubusercontent.com/ben-barbier/unicorn-back-data/master/capacities.json').then(e => e.json()),
    ]).then(responses => {
      const unicorns = responses[0];
      const capacities = responses[1];

      // Les exercices commencent ici !
      const uppercaseUnicorns = unicorns.map(unicorn => ({...unicorn, name: unicorn.name.toUpperCase()}));

      const filter = unicorns.filter(unicorn => unicorn.birthyear >= 2000);

      const unicornSorted = [...unicorns].sort((u1: Unicorn, u2: Unicorn) => u1.birthyear - u2.birthyear);

      const unicornOlder = unicorns.reduce((acc, unicorn) => Math.min(acc, unicorn.birthyear), new Date().getFullYear());

    });
  }

  public unicorn1 = {
    id: 9,
    name: 'Gandalf',
    birthyear: 1869,
    weight: 65,
    photo: 'http://localhost:3000/unicorns/photos/unicorn-9.png',
    hobbies: ['Dragons',
      'Magic'
    ],
    capacities: [
      4
    ]
  };

  public logMessage(message: string) {
    console.log(message);
  }

}
