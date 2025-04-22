import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
  ngOnInit() {
    console.log("Coucou !")
  }

  ngOnChanges() {
    console.log("J'ai changé reviens !")
  }

  ngDoCheck() {
    console.log("OK !");
  }

  ngAfterViewInit() {
    console.log("Maintenant que c'est fini, on va tout changer !")
  }

  ngDoDestray() {
    console.log("Game Over");
  }
}
