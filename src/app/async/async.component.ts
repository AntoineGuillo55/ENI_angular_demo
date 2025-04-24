import { Component } from '@angular/core';

@Component({
  selector: 'app-async',
  imports: [],
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss'
})
export class AsyncComponent {

  num: number = 0;

  getRandomNumber(): number {
    return Math.ceil(Math.random() * 100);
  }

  getRandomNumberPromise(): Promise<number> {
    console.log("2");
    return new Promise((resolve, reject) => {
      console.log("3");
      resolve(Math.ceil(Math.random() * 100));
      console.log("4");
    });
  }

  async getRandomNumberAsync() {
    return Math.ceil(Math.random() * 100);
  }

  async getNumber() {
    // console.log("1");
    // this.getRandomNumberAsync().then((result: number) => {
    //   console.log("5");
    //   this.num = result;
    //   console.log("6");
    // }).catch((error) => {
    //   console.log(error);
    // }).finally(() => {
    //   console.log("Fin de la promesse !");
    // });

    try {
      this.num = await this.getRandomNumberAsync();
    } catch (error) {
      console.log(error);
    }
  }

}
