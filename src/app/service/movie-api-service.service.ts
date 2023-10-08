import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "af673c2b9aaec701c73afd5770dd364f";
//banner api data

  bannerApiData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }
  
  // trendingmovieapidata

  trendingMovieApiData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  //search movie
  getSearchMovie(data:any):Observable<any>
  {
    console.log(data,'movie#');

    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  //get movie details

  getMovieDetails(data:any):Observable<any>
  {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`);
  }

  //get movie video

  getMovieVideo(data:any):Observable<any>
  {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`);
  }

  //get movie cast

  getMovieCast(data:any):Observable<any>
  {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`);
  }

  //action

  fetchActionMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure

  fetchAdventureMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  //animation

  fetchAnimationMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  //comedy

  fetchComedyMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  //documentary

  fetchDocumentaryMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  //Science Fiction

  fetchScienceFictionMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  //thriller

  fetchThrillerMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }




}
