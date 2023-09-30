import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  constructor(private router: Router) {}


  OnSubmit(){
    this.router.navigate(['/completed']);
    console.log("navigate to completed")

  }
}

