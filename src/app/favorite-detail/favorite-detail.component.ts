import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css']
})
export class FavoriteDetailComponent implements OnInit {
  public favoriteDetailList: any[] = [];
  public imgSrc: string = 'https://image.tmdb.org/t/p/w300';
  public favoriteMovie: any;
  public deleteFavFilm: any;
  public nextFavMovie: any;

  constructor(private localData: DataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadFavoriteDetailList()
  }

  loadFavoriteDetailList(): void {
    this.favoriteDetailList = this.localData.getLocalData();
    this.getFavoriteId();
  }

  getFavoriteId(): void {
    this.route.params.subscribe((params) => {
      this.getFavoriteMovie(+params.id)
    })
  }

  getFavoriteMovie(id: number): void {
    this.favoriteMovie = this.favoriteDetailList.find((m: any) => m.id === id);
  }

  nextFavoriteMovie(): void {
    this.nextFavMovie = this.favoriteDetailList.indexOf(this.favoriteMovie)
    let newArray = this.favoriteDetailList[this.nextFavMovie + 1]
    this.router.navigate(['/favorite-detail', newArray.id])
  }

  unfavoriteFilm(e: any): void {
    this.deleteFavFilm = this.favoriteDetailList.find((m: any) => m.id === Number(e.target.id));
    let index = this.favoriteDetailList.indexOf(this.deleteFavFilm)
    this.favoriteDetailList.splice(index, 1)
    localStorage.setItem('favorite', JSON.stringify(this.favoriteDetailList));
  }
}
