import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eai';
  nome = 'Joao';
  nome2 = 'Maria';

  exibirAlerta() {
    alert(this.nome2);
    console.log(this.nome2);
  }

  salarEvento($event: any) {
    alert($event);
  }
}
