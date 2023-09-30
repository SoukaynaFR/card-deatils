import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: CardComponent }, 
  { path: 'completed', component: CompletedComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
