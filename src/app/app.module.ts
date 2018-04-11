import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DiceRollModule } from './dice-roll/dice-roll.module';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from './app.material.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dice-roll', component: DiceRollComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const translateConfig: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot(translateConfig),
    AppMaterialModule,
    DiceRollModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
