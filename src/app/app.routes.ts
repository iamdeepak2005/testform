import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BillComponent } from './bill/bill.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'bill', component: BillComponent},
];
