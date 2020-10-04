import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies:any[];
  imgSrc:string='https://image.tmdb.org/t/p/w500/'
  constructor(private _MoviesService:MoviesService) {

    this._MoviesService.getTrendingMovies('movie').subscribe( (data) =>{
      this.movies = data.results;
    })
   }

  ngOnInit(): void {
  }

}
