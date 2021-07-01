import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public imgSrc: string = 'https://image.tmdb.org/t/p/w300';
  public totalDb: any = [];

  constructor(private router: Router, private dataBase: DataService) {
  }

  ngOnInit(): void {
    this.loadDataMovies()
  }

  loadDataMovies() {
    this.dataBase.getData().subscribe(movie => {
      this.totalDb = movie;
    })
  }

  detailMovie(e: any) {
    this.router.navigate(['/detail', e.target.id])
  }


}
