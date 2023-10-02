import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  cardholder: any;
  cardNumber: any;
  MM: any;
  YY: any;
  cvc: any;
  constructor( private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.cardholder = params['cardholder'];
      this.cardNumber = +params['cardNumber'];
      this.MM = +params['MM'];
      this.YY = +params['YY'];
      this.cvc = +params['cvc'];
    });
  }
  
}



