import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count!: number;
  @Input() voted = false;
  @Output() vote = new EventEmitter();

  faHeartSolid = faHeartSolid;
  faHeartRegular = faHeartRegular;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.vote.emit({});
  }
}
