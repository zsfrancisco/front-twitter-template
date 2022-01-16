import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NewsComponent } from './components/news/news.component';
import { SuggestedComponent } from './components/suggested/suggested.component';
import { NewsHomeComponent } from './components/news/components/news-home/news-home.component';
import { NewsTwitCreationComponent } from './components/news/components/news-twit-creation/news-twit-creation.component';
import { NewsTwitsListComponent } from './components/news/components/news-twits-list/news-twits-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NewsComponent,
    SuggestedComponent,
    NewsHomeComponent,
    NewsTwitCreationComponent,
    NewsTwitsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
