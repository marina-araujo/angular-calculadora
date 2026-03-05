import { Component, signal } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component'

@Component({
  selector: 'app-root',
  imports: [ CalculadoraComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly title = signal('conceitos-basicos');
}
