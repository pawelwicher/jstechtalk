import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayContentComponent } from './display-content/display-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'item/0', pathMatch: 'full' },
  { path: 'item/:id', component: DisplayContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
