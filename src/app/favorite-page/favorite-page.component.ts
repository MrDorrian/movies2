import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  public favoriteListMovies: any[] = [];
  public imgSrc: string = 'https://image.tmdb.org/t/p/w300';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loadFavoriteList();
  }

  loadFavoriteList() {
    this.favoriteListMovies = JSON.parse(<string>localStorage.getItem('favorite'));
  }

  detailMovie(e: any) {
    if (e.target.id) {
      this.router.navigate(['/detail', e.target.id])
    }
    return
  }
}
