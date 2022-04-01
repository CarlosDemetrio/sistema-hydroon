import {Component, OnInit} from '@angular/core';

/**
 * Componente raíz da aplicação.
 * @version 1.0
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'Hydroon';

  ngOnInit(): void {
  }
}
