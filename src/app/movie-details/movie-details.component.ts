import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  type:any;
  id:any; 
  moviedetails:any;
  imgSrc:string='https://image.tmdb.org/t/p/w500/'

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService ) {

    this.type = _ActivatedRoute.snapshot.paramMap.get('type');
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

     this._MoviesService.getMoviesDetails(this.type , this.id).subscribe( (data) => {
       this.moviedetails = data;
     })
    
   }

  ngOnInit(): void {
  }

}
