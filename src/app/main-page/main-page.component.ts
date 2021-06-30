import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Movie {

}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public baseUrl: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US';
  public totalDB: any = [];
  public moviesDB: any = [];
  public imgSrc: string = 'https://image.tmdb.org/t/p/w300';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<void>(this.baseUrl).subscribe(res => {
      this.totalDB = res;
      this.moviesDB = this.totalDB.results;
    })
  }


}
