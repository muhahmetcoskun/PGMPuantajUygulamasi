import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'home', loadChildren: () =>
  import('./home/home.module').then(m =>m.HomeModule)
  },
  //{path:'notfound',component:NotFoundComponent},
  {path:'login',component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
