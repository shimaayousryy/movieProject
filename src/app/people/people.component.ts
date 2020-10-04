import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {MoviesService} from '../movies.service'


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people:any[];
  imgSrc:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService) {

    this._MoviesService.getTrendingMovies('person').subscribe( (data) =>{
      this.people = data.results;



    })

   
   }

   


   ngOnInit(): void {
  }

}
