import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {



  constructor(private _HttpClient:HttpClient) { 

  }


  getTrendingMovies(mediaType):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=bee6192517a2aa835ac7c69403dd863c`)
  }


  getMoviesDetails(mediaType,id):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=bee6192517a2aa835ac7c69403dd863c&language=en-US`)
  }


  // getNetwork():Observable<any>{
  //   return this._HttpClient.get(`https://api.themoviedb.org/3/network/123?api_key=bee6192517a2aa835ac7c69403dd863c`);
  // }
}


