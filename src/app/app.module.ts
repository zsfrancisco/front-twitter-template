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
import { TwitComponent } from './components/news/components/news-twits-list/twit/twit.component';
import { SuggestedNewsComponent } from './components/suggested/suggested-news/suggested-news.component';
import { SuggestedFollowComponent } from './components/suggested/suggested-follow/suggested-follow.component';
import { SuggestedNewsItemComponent } from './components/suggested/suggested-news/suggested-news-item/suggested-news-item.component';
import { SuggestedFollowItemComponent } from './components/suggested/suggested-follow/suggested-follow-item/suggested-follow-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NewsComponent,
    SuggestedComponent,
    NewsHomeComponent,
    NewsTwitCreationComponent,
    NewsTwitsListComponent,
    TwitComponent,
    SuggestedNewsComponent,
    SuggestedFollowComponent,
    SuggestedNewsItemComponent,
    SuggestedFollowItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
