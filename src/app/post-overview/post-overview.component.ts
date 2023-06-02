import { Component, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePostService } from '../create-post.service';

@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.scss']
})
export class PostOverviewComponent {
  public posts: any[] = [
    {
      employee: 'John Doe',
      date: '02.01.1900',
      dateFulfilled: '02.01.1900',
      status: 'Offen',
      priority: 'High',
      type:'Wartung',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      employee: 'John Doe',
      date: '02.01.1900',
      dateFulfilled: '02.01.1900',
      status: 'Offen',
      priority: 'High',
      type:'Wartung',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }
  ]

  constructor(private createPostService: CreatePostService) {
    this.createPostService.newPost.subscribe(post => {
      const newPosts = [...this.posts, post]
      this.posts = newPosts
      console.log(this.posts)
    })
  }
}
