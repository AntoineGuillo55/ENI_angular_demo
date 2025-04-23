import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  tabImg : any[] = [{
    src: "https://cdn-s-www.ledauphine.com/images/FB7D78B4-9032-45BB-8F21-55D335ACE735/NW_raw/pixabay-cc0-1505452499.jpg",
    name: "dog"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0265/1327/7008/files/petit-chat.jpg?v=1694430335",
    name: "cat"
  }]

  constructor() {
    console.log("Création du service");

   }

   addImage(image: any) {
    console.log(image);
    this.tabImg.push(image);
  }
}
