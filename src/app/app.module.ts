import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CombinationComponent } from './combination/combination.component';
import { BoardComponent } from './features/game-board/board/board.component';
import { ConsoleComponent } from './features/game-board/console/console.component';
import { GameplaceComponent } from './features/game-board/gameplace/gameplace.component';
import { ScoreTabComponent } from './features/game-board/score-tab/score-tab.component';
import { HeaderComponent } from './features/header/header.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { PlayerComponent } from './features/player/player.component';
import { UserComponent } from './features/user/user.component';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectedDicesComponent } from './features/selected-dices/selected-dices.component';
import { PlateauComponent } from './features/plateau/plateau.component';
import { SelectionComponent } from './features/game-board/selection/selection.component';
import { DiceComponent } from './features/dice/dice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ScoreTabComponent,
    UserComponent,
    PlayerComponent,
    GameplaceComponent,
    ConsoleComponent,
    HomePageComponent,
    CombinationComponent,
    SelectedDicesComponent,
    PlateauComponent,
    SelectionComponent,
    DiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
