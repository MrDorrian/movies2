import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  public favoriteListMovies: any[] = [];
  public imgSrc: string = 'https://image.tmdb.org/t/p/w300';

  constructor() {
  }

  ngOnInit(): void {
    this.loadFavoriteList();
  }

  loadFavoriteList() {
    this.favoriteListMovies = JSON.parse(<string>localStorage.getItem('favorite'));
  }
}
