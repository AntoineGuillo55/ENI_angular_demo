import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = "Coucou !"

  tabImg = [{
    src: "https://cdn-s-www.ledauphine.com/images/FB7D78B4-9032-45BB-8F21-55D335ACE735/NW_raw/pixabay-cc0-1505452499.jpg",
    name: "dog"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0265/1327/7008/files/petit-chat.jpg?v=1694430335",
    name: "cat"
  }]

  index: number = 0;
  a: number = 5;
  b: number = 25;
  age: number = 18;
  bgColor: string = "#ffffff"
  sizeText: number = 5;
  currentDate: number = Date.now();

  loadNextImage() {
    if(this.index < this.tabImg.length-1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }

  resetTitle() {
    this.title = "Coucou !";
  }
  doSomething() {
    alert("I did so I am ! ");
  }
}
