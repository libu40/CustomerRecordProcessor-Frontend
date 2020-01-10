import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home Component' } },
    { path: 'home', component: HomeComponent, data: { title: 'Home Component' } },
    { path: 'upload', component: UploadComponent, data: { title: 'Upload Component' } },
    { path: 'about-us', component: AboutUsComponent, data: { title: 'About us Component' } }
  ];

   
@NgModule({
    declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    AboutUsComponent
    ],
    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
        appRoutes,
      ),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CustomMaterialModule
    ],
    providers:[],
    bootstrap: [AppComponent]

})

export class  AppModule {}