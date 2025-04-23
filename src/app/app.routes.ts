import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { protectImageGuard } from './protect-image.guard';
import { ImageComponent } from './image/image.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'image', component: ImageComponent },
    { path: 'image/:id', component: ImageComponent, canActivate: [protectImageGuard] },
    { path: "**", component: NotFoundComponent }
];
