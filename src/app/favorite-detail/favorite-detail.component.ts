import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css']
})
export class FavoriteDetailComponent implements OnInit {
  public favoriteDetailList: any[] = [];
  public imgSrc: string = environment.imgSrc;
  public favoriteMovie: any;
  public deleteFavFilm: any;
  public nextFavMovie: any;
  public favoriteDetailIndex: any;

  constructor(private localData: DataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadFavoriteDetailList();
  }

  loadFavoriteDetailList(): void {
    this.favoriteDetailList = this.localData.getLocalData();
    this.getFavoriteId();
  }

  getFavoriteId(): void {
    this.route.params.subscribe((params) => {
      this.getFavoriteMovie(+params.id);
    })
  }

  getFavoriteMovie(id: number): void {
    this.favoriteMovie = this.favoriteDetailList.find((m: any) => m.id === id);
  }

  nextFavoriteMovie(): void {
    this.nextFavMovie = this.favoriteDetailList.indexOf(this.favoriteMovie);
    let newArray = this.favoriteDetailList[this.nextFavMovie + 1];
    if (newArray) {
      this.router.navigate(['/favorite-detail', newArray.id]);
    }
    return
  }

  unfavoriteFilm(e: any): void {
    this.deleteFavFilm = this.favoriteDetailList.find((m: any) => m.id === Number(e.target.id));
    this.favoriteDetailIndex = this.favoriteDetailList.indexOf(this.deleteFavFilm);
    this.favoriteDetailList.splice(this.favoriteDetailIndex, 1);
    localStorage.setItem('favorite', JSON.stringify(this.favoriteDetailList));
    this.router.navigate(['/favorite']);
  }
}
