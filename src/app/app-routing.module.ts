import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';


const routes: Routes = appRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
