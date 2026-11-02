import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-security-guidelines';
}
