import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SignUp} from './pages/sign-up/sign-up';

@Component({
  selector: 'app-root',
  imports: [SignUp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-security-guidelines';
}
