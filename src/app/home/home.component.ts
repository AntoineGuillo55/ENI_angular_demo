import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImagesService } from '../services/images.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterLink],
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
  isAdmin: boolean = false;

  // Autre mécanisme d'injection du service
  private imagesSrv: ImagesService = inject(ImagesService);
  private router: Router = inject(Router);

  // constructor(private imagesSrv: ImagesService) {
  //   console.log("Création HomeComponent");
  // }

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

  becomeAdmin() {
    this.isAdmin = !this.isAdmin;
    if (this.isAdmin)
      this.imagesSrv.isAdmin = true;
    else
      this.imagesSrv.isAdmin = false;
  }

  navigate() {
    this.router.navigate(['/image', this.index]);
  }
}
