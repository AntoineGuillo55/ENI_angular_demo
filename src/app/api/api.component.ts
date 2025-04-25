import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent {
  private apiSrv: ApiService = inject(ApiService);
  user: string = '';
  imgSrc: string = '';

  getUser() {
    this.apiSrv.getUser().subscribe({
      next: (data: any) => {
        this.user = data.results[0].name.first + ' ' + data.results[0].name.last;
      }, error: (err) => {
        console.log(err);
      }, complete: () => { }
    });;
  }

  async getImg() {
    try {
      this.imgSrc = await this.apiSrv.getCatImg();
    } catch (error) {
      console.log(error);
    }
  }
}
