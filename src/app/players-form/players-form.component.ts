import { Component, OnInit } from '@angular/core';

import { Players }    from '../players';

@Component({
  selector: 'app-players-form',
  templateUrl: './players-form.component.html',
  styleUrls: ['./players-form.component.css']
})
export class PlayersFormComponent implements OnInit {
  
  model = new Players(2, 'test one', 'test two');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  
  heroes = [];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  delete(heroes: Players): void {
    this.heroes = this.heroes.filter(h => h !== heroes);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
