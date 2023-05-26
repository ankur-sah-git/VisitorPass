import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePassComponent } from './Visitor/create-pass/create-pass.component';
import { GeneratePassComponent } from './Visitor/generate-pass/generate-pass.component';

const routes: Routes = [
  { path: 'CreatePass', component: CreatePassComponent, pathMatch: 'full' },
  { path: 'GeneratePass', component: GeneratePassComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
