import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameQuestionComponent } from "./features/pages/game-question/game-question.component";

@Component({
  selector: 'app-root',
  imports: [GameQuestionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kahoot';
}
