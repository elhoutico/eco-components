import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyInputDemoComponent } from './currency-input-demo.component';


const routes: Routes = [{path: '', component: CurrencyInputDemoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyInputDemoRoutingModule { }
