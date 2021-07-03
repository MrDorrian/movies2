import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US';

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get<void>(this.baseUrl)
  }

  getLocalData() {
    return JSON.parse(<string>localStorage.getItem('favorite'));
  }

}


