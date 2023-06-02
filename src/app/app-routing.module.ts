import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostOverviewComponent } from './post-overview/post-overview.component';

const routes: Routes = [
  { path: '', redirectTo:'/overview', pathMatch: 'full' },
  { path: 'overview', component: PostOverviewComponent },
  { path: 'create', component: CreatePostComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
