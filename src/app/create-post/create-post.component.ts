import { Component } from '@angular/core';
import { CreatePostService } from '../create-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})


export class CreatePostComponent {
  public employee: string;
  public type: string
  public status: string;
  public priority: string;
  public date: Date;
  public dateFulfilled: Date;
  public description: string;

  constructor(private createPostService: CreatePostService, private router: Router) {
    
  }
  
  submit() {
    let newPost = {
      employee: '',
      date: '',
      dateFulfilled: '',
      status: '',
      priority: '',
      type:'',
      description: ''
    }

    newPost = {
      employee: this.employee,
      date: this.date.toString(),
      dateFulfilled: this.dateFulfilled.toString(),
      status: this.status,
      priority: this.priority,
      type: this.type,
      description: this.description
    }
    

    this.createPostService.createdPost.next(newPost)
    this.router.navigate(['/overview'])
  }
}
