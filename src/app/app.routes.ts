import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { protectImageGuard } from './protect-image.guard';
import { ImageComponent } from './image/image.component';
import { FormComponent } from './form/form.component';
import { AsyncComponent } from './async/async.component';
import { ApiComponent } from './api/api.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'image', component: ImageComponent },
    { path: 'image/:id', component: ImageComponent, canActivate: [protectImageGuard] },
    { path: 'form', component: FormComponent },
    { path: 'async', component: AsyncComponent },
    { path: 'api', component: ApiComponent },
    { path: "**", component: NotFoundComponent }
];
