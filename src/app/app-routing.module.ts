import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { MainPageComponent } from './main-page.component/main-page.component';
import { StandingsComponent } from './standings.component/standings.component';

const routes: Routes = [
  {path: '', redirectTo: '/standings', pathMatch: 'full'},
  {path: 'standings', component: StandingsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
