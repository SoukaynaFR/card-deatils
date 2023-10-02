import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardholder: string = '';
  cardNumber: string = '';
  MM: string = '';
  YY: string = '';
  cvc: string = '';

  showCardholderError: boolean = false;
  showCardNumberError: boolean = false;
  showMMError: boolean = false;
  showYYError: boolean = false;
  showCvcError: boolean = false;

  showCardNumberInvalidFormatError : boolean = false;
  showMMInvalidFormatError : boolean = false;
  showYYInvalidFormatError : boolean = false;
  showCvcInvalidFormatError : boolean = false;

  cantBeBlank = "Can't be blank";

  constructor(private router: Router, private route: ActivatedRoute) {}

  
  

  onSubmit() {
    // Reset error flags
    this.showCardholderError = false;
    this.showCardNumberError = false;
    this.showMMError = false;
    this.showYYError = false;
    this.showCvcError = false;
  
    // Check for empty fields
    if (!this.cardholder) {
      this.showCardholderError = true;
    }
    if (!this.cardNumber) {
      this.showCardNumberError = true;
      this.showCardNumberInvalidFormatError = false;

    }
    if (!this.MM) {
      this.showMMError = true;
      this.showMMInvalidFormatError = false;

    }
    if (!this.YY) {
      this.showYYError = true;
      this.showYYInvalidFormatError = false;

    }
    if (!this.cvc) {
      this.showCvcError = true;
      this.showCvcInvalidFormatError = false;

    }
  
   // If any error is shown, return
   if (
    this.showCardholderError ||
    this.showCardNumberError ||
    this.showMMError ||
    this.showYYError ||
    this.showCvcError
  ) {
    return;
  }

    // Check for invalid formats and set corresponding error flags
    if (!isValidCardNumber(this.cardNumber)) {
      this.showCardNumberInvalidFormatError = true;
    }
    if (!isValidExpiryDate(this.MM, this.YY)) {
      this.showMMInvalidFormatError = true;
      this.showYYInvalidFormatError = true;
    }
    if (!isValidCvc(this.cvc)) {
      this.showCvcInvalidFormatError = true;
    }
 
  
    // If all checks pass, navigate to the "completed" page
    this.router.navigate(['/completed', {
       
        cardholder: this.cardholder,
        cardNumber: this.cardNumber,
        MM: this.MM,
        YY: this.YY,
        cvc: this.cvc,
      }]
    );
    console.log('Navigate to completed');
  }
  

  
  
  
  
}

function isValidCardNumber(cardNumber: string): boolean {
  // Card number should contain only digits and be exactly 16 digits long
   return /^\d{16}$/.test(cardNumber);

   
}


function isValidExpiryDate(MM: string, YY: string): boolean {
  // MM and YY should contain only digits and be in the format MM/YY
  return /^\d{2}\/\d{2}$/.test(`${MM}/${YY}`);
}

function isValidCvc(cvc: string): boolean {
  // CVC should contain only digits and be exactly 3 digits long
  return /^\d{3}$/.test(cvc);
}


