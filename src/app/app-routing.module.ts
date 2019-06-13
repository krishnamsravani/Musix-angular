import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchResultComponent} from './search-result/search-result.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'result/:id',component:SearchResultComponent},
  {path:'favs',component:WishlistComponent},
  {path:'delete/:trackId',component:DeleteComponent},
  {path:'det/:name/:comment',component:DetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
