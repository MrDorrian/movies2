import {Component, OnInit,} from '@angular/core';
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
  public startPage: any;

  constructor(private router: Router, private dataBase: DataService) {
  }

  ngOnInit(): void {
    this.loadDataMovies(this.dataBase.currentPage)
  }

  loadDataMovies(page: any): void {
    this.dataBase.getData(page).subscribe(movie => {
      this.totalDb = movie;
    })
  }

  detailMovie(e: any): void {
    if (e.target.id) {
      this.router.navigate(['/detail', e.target.id])
    }
    return
  }

  nextPage() {
    this.dataBase.currentPage++
    this.loadDataMovies(this.dataBase.currentPage);
  }
}
