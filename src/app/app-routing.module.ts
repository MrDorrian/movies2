import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {FavoritePageComponent} from "./favorite-page/favorite-page.component";
import {DetailPageComponent} from "./detail-page/detail-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'favorite', component: FavoritePageComponent},
  {path: 'detail/:id', component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
