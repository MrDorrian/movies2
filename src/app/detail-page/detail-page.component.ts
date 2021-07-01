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
  public imgSrc: string = 'https://image.tmdb.org/t/p/w300';

  constructor(private route: ActivatedRoute, private dataBase: DataService) {
  }

  ngOnInit(): void {
    this.loadMoviesData();
  }

  loadMoviesData(): any {
    this.dataBase.getData().subscribe(res => {
      this.detailMovieDB = res;
      this.detailMovieDB = this.detailMovieDB.results;
      this.getMovieId();
    })
  }

  getMovieId(): any {
    this.route.params.subscribe((params) => {
      this.loadDetailMovie(+params.id)
    })
  }

  loadDetailMovie(id: number): any {
    this.detailMovie = this.detailMovieDB.find((m: any) => m.id === id);
  }

}
