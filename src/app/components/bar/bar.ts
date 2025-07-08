import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../../classes/comment';

@Component({
  selector: 'app-bar',
  standalone: false,
  templateUrl: './bar.html',
  styleUrl: './bar.scss'
})
export class Bar implements OnInit {

  @Input() comments: Comment[] = [];
  @Output() changePosts: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
  }

  public getOtherPosts(): void {
    this.changePosts.emit(true);
  }

}
