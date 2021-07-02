import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  public detailMovieDB: any;
  public detailMovie: any;
  public localStorageDB: any[] = [];
  public imgSrc: string = 'https://image.tmdb.org/t/p/w300';

  constructor(private route: ActivatedRoute, private dataBase: DataService) {
  }

  ngOnInit(): void {
    this.loadMoviesData();
  }

  loadMoviesData(): void {
    this.dataBase.getData().subscribe(res => {
      this.detailMovieDB = res;
      this.detailMovieDB = this.detailMovieDB.results;
      this.getMovieId();
    })
  }

  getMovieId(): void {
    this.route.params.subscribe((params) => {
      this.loadDetailMovie(+params.id)
    })
  }

  loadDetailMovie(id: number): void {
    this.detailMovie = this.detailMovieDB.find((m: any) => m.id === id);
  }

  addToFavoriteList(): void {
    if (localStorage.getItem('favorite')) {
      this.localStorageDB = JSON.parse(<string>localStorage.getItem('favorite'))
    }
    this.localStorageDB.push(this.detailMovie);
    localStorage.setItem('favorite', JSON.stringify(this.localStorageDB));
  }
}
