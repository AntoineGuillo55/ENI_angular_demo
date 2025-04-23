import { Component, inject } from '@angular/core';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {

  name: string = '';
  imgSrc: string = '';
  index: number = 0;

  constructor(private imagesService: ImagesService) {
    console.log("Création ImageComponent");
  }

  ngOnInit() {
    this.name = this.imagesService.tabImg[0].name;
    this.imgSrc = this.imagesService.tabImg[0].src;
  }

  loadNextImage() {
    this.index++;
    if (this.index >= this.imagesService.tabImg.length)
      this.index = 0;
    this.name = this.imagesService.tabImg[this.index].name;
    this.imgSrc = this.imagesService.tabImg[this.index].src;
  }
}
