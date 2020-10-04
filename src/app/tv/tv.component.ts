import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  tvs:any[];
  imgSrc:string='https://image.tmdb.org/t/p/w500/'
  constructor(private _MoviesService:MoviesService) {

    this._MoviesService.getTrendingMovies('tv').subscribe( (data) =>{
      this.tvs = data.results;
    })
   }

  ngOnInit(): void {
  }

}
