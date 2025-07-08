import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment-service';
import {Comment} from '../../classes/comment';

@Component({
  selector: 'app-foo',
  standalone: false,
  templateUrl: './foo.html',
  styleUrl: './foo.scss'
})
export class Foo implements OnInit {

  public loadingComments: boolean = true;
  public comments: Comment[] = [];


  constructor(
    private commentService: CommentService
  ){}

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.commentService.getRandomPosts().subscribe((comments) => {
      this.comments = comments;
    });
  }

  public getOtherPosts(evt: boolean): void {
    this.getPosts();
  }

}
