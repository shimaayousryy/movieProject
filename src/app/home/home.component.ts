import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //  pages:number=1;
  tranding:any[];
  imgSrc:string='https://image.tmdb.org/t/p/w500/'
  constructor(private _MoviesService:MoviesService) {

    this._MoviesService.getTrendingMovies('all').subscribe( (data) =>{
      this.tranding = data.results;
      // this.pages = data.page;
      // console.log(this.pages);

  
    })

  

    
   }


  //  changePages(num){
  //    this.pages=num
  // }


  ngOnInit(): void {
  }

}
