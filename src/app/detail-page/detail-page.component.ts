import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  public nextMovie: number = 0;
  public favoriteBtnClass: string = 'addFavoriteBtn';
  public ifFavorite: boolean = false;
  public imgSrc: string = 'https://image.tmdb.org/t/p/w300';

  constructor(private route: ActivatedRoute, private dataBase: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadMoviesData();

  }

  loadMoviesData(): void {
    this.dataBase.getData(this.dataBase.currentPage).subscribe(res => {
      this.detailMovieDB = res;
      this.detailMovieDB = this.detailMovieDB.results;
      this.getMovieId();
    })
  }

  getMovieId(): void {
    this.route.params.subscribe((params) => {
      this.loadDetailMovie(+params.id);
      this.checkIdfavorite(+params.id);
    })
  }

  loadDetailMovie(id: number): void {
    this.detailMovie = this.detailMovieDB.find((m: any) => m.id === id);
  }

  addToFavoriteList(e: any): void {
    if (localStorage.getItem('favorite')) {
      this.localStorageDB = JSON.parse(<string>localStorage.getItem('favorite'));
    }
    this.localStorageDB.push(this.detailMovie);
    localStorage.setItem('favorite', JSON.stringify(this.localStorageDB));
    this.checkIdfavorite(this.detailMovie.id)
  }

  loadNextMovie(): void {
    this.nextMovie = this.detailMovieDB.indexOf(this.detailMovie)
    let newArray = this.detailMovieDB[this.nextMovie + 1]
    this.router.navigate(['/detail', newArray.id])
  }

  checkIdfavorite(id: number): void {
    if (localStorage.getItem('favorite')) {
      this.localStorageDB = JSON.parse(<string>localStorage.getItem('favorite'));
      let checkId = this.localStorageDB.find((check: any) => check.id === id)
      if (checkId) {
        this.favoriteBtnClass = 'inActive';
      } else {
        this.favoriteBtnClass = 'addFavoriteBtn';
      }
    }
  }
}
