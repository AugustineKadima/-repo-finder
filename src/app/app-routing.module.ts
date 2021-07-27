import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RepositoriesComponent } from './repositories/repositories.component'

const routes: Routes = [
  {path:"user", component: UserComponent},
  {path:"repositories", component: RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
