import { Component, ChangeDetectorRef, ChangeDetectionStrategy, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, of, map } from 'rxjs';
import { CreatePostService } from '../create-post.service';

@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PostOverviewComponent {
  public posts: Observable<any[]> = of([
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
  ]);
  

  constructor(private createPostService: CreatePostService, private router: Router) {
    this.createPostService.newPost.subscribe(post => {
      this.posts.pipe(
        map(existingPosts => [...existingPosts, post])
      ).subscribe(updatedPosts => {
        console.log(updatedPosts)
        this.posts = of(updatedPosts);
      });
    });
  }


}
