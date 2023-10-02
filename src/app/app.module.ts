import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompletedComponent } from './completed/completed.component';
import { CardNumberFormatPipe } from './card-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompletedComponent,
    CardNumberFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
