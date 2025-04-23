import { Component, inject } from '@angular/core';
import { ImagesService } from '../services/images.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private imagesService: ImagesService, private activatedRoute: ActivatedRoute) {
    console.log("Création ImageComponent");
  }

  ngOnInit() {

    // Deux manières de récupérer les paramètres
    this.index = this.activatedRoute.snapshot.params['id'];
    // const index = this.activatedRoute.snapshot.paramMap.get('id');
    // index ? this.index = parseInt(index) : this.index = 0;

    // 3ème manière de faire avec un observable
    // this.activatedRoute.params.subscribe({
    //   next: (data: any) => this.index = data.id
    // });

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
