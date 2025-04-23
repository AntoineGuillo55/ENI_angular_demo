import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  // providers: [ImagesService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = "Coucou !"

  tabImg : any[] = []
  index: number = 0;
  a: number = 5;
  b: number = 25;
  age: number = 18;
  bgColor: string = "#ffffff"
  sizeText: number = 5;
  currentDate: number = Date.now();
  newImage: string = '';
  newName: string = '';

  // private imagesSrv: ImagesService = inject(ImagesService);

  constructor(private imagesSrv: ImagesService) {
    console.log("Création HomeComponent");
  }

  loadNextImage() {
    if(this.index < this.tabImg.length-1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }

  ngOnInit() {
    this.tabImg = this.imagesSrv.tabImg;
  }

  resetTitle() {
    this.title = "Coucou !";
  }

  doSomething() {
    alert("I did so I am ! ");
  }

  addImage() {
    let newPhoto = {
      src: this.newImage,
      name: this.newName
    }
    this.imagesSrv.addImage(newPhoto);
  }
}
