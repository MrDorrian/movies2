import {Component, OnInit,} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public totalDb: any = [];
  public imgUrl: string = environment.imgSrc;
  public totalPages: any;

  constructor(private router: Router, private dataBase: DataService,) {
  }

  ngOnInit(): void {
    this.loadDataMovies(this.dataBase.currentPage);
  }

  loadDataMovies(page: any): void {
    this.dataBase.getData(page).subscribe(movie => {
      this.totalDb = movie;
      this.totalPages = this.totalDb.total_pages;
    })
  }

  detailMovie(e: any): void {
    if (e.target.id) {
      this.router.navigate(['/detail', e.target.id]);
      window.scrollTo({top: 110});
    }
    return
  }

  nextPage(): void {
    this.dataBase.currentPage++;
    this.loadDataMovies(this.dataBase.currentPage);
  }

  firstPage(): void {
    this.dataBase.currentPage = 1;
    this.loadDataMovies(this.dataBase.currentPage);
  }

  prevPage(): void {
    if (this.dataBase.currentPage >= 2) {
      this.dataBase.currentPage--;
      this.loadDataMovies(this.dataBase.currentPage);
    }
  }

  paginBtn(): void {

  }

  lastPage(): void {
    this.dataBase.currentPage = this.totalPages;
    this.loadDataMovies(this.dataBase.currentPage);
  }
}
