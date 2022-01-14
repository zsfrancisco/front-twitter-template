import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NewsComponent } from './components/news/news.component';
import { SuggestedComponent } from './components/suggested/suggested.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NewsComponent,
    SuggestedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
