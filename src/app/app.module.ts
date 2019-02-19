import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './products.service';
import { RecommendationBarComponent } from './recommendation-bar/recommendation-bar.component';
import { RecommendationItemComponent } from './recommendation-bar/recommendation-item/recommendation-item.component';
import { MapComponent } from './map/map.component';
import { DialogflowService } from '../app/chatbot/services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from '../app/chatbot/components';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationBarComponent,
    RecommendationItemComponent,
    MapComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService, DialogflowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
