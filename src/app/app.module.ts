import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

import { PlayersFormComponent } from './players-form/players-form.component';
import { StartGameModalComponent } from './start-game-modal/start-game-modal.component';
import { CardDeckComponent } from './card-deck/card-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersFormComponent,
    StartGameModalComponent,
    CardDeckComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
