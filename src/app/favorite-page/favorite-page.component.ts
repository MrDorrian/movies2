import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  public favoriteListMovies: any[] = [];
  public deleteFilmId: any;
  public imgSrc: string = environment.imgSrc;
  public favoriteFilmIndex: any;

  constructor(private router: Router, private localData: DataService) {
  }

  ngOnInit(): void {
    this.loadFavoriteList();
  }

  loadFavoriteList(): void {
    this.favoriteListMovies = this.localData.getLocalData();
  }

  detailMovie(e: any): void {
    if (e.target.id) {
      this.router.navigate(['/favorite-detail', e.target.id]);
      window.scrollTo({top: 110});
    }
    return
  }

  unFavoriteFilm(e: any): void {
    this.deleteFilmId = this.favoriteListMovies.find((m: any) => m.id === Number(e.target.id));
    this.favoriteFilmIndex = this.favoriteListMovies.indexOf(this.deleteFilmId);
    this.favoriteListMovies.splice(this.favoriteFilmIndex, 1);
    localStorage.setItem('favorite', JSON.stringify(this.favoriteListMovies));
  }
}
