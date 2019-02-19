import { Component, NgModule } from '@angular/core';
import { Message } from '../app/chatbot/models/message';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductsService]
})
export class AppComponent {
  public message : Message;
  public messages : Message[];

  constructor(private productservice : ProductsService) {
    this.message = new Message('', 'assets/chatbotImages/user.png');
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/chatbotImages/bot.png', new Date())
    ];
  }
  title = 'iCartSystemAngular';
  repdata= {some : "data"};

  ngOnInit(){
    this.productservice.getProducts().subscribe(data => this.repdata = data);
  }
}
