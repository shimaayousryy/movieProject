import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NotfounddataComponent } from './notfounddata/notfounddata.component';
import { PeopleComponent } from './people/people.component';
import { RegistrationComponent } from './registration/registration.component';
import { TvComponent } from './tv/tv.component';
import {AuthrGuard} from './authr.guard'
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'home' ,canActivate:[AuthrGuard] ,component:HomeComponent},
  {path:'tv', canActivate:[AuthrGuard] , component:TvComponent},
  {path:'people', canActivate:[AuthrGuard] , component:PeopleComponent},
  {path:'about', canActivate:[AuthrGuard] , component:AboutComponent},
  {path:'movie', canActivate:[AuthrGuard] , component:MovieComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'moviedetails/:type/:id', canActivate:[AuthrGuard] , component:MovieDetailsComponent},
  {path:'**',component:NotfounddataComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
