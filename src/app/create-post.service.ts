import { Injectable, Output } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class CreatePostService {
    @Output() createdPost = new Subject
    @Output() newPost = new Subject

    constructor() {
        this.createdPost.subscribe(post => {
            console.log(post)
            this.newPost.next(post)
        })
    }

}