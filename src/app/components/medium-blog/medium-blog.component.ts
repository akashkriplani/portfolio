import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { IMediumBlogPostsResponse } from '../../interfaces';
import { ShortenPipe } from '../../pipes/shorten.pipe';
import { NodeToTextPipe } from '../../pipes/node-to-text.pipe';

@Component({
  selector: 'app-medium-blog',
  standalone: true,
  imports: [CommonModule, ShortenPipe, NodeToTextPipe],
  templateUrl: './medium-blog.component.html',
  styleUrls: ['./medium-blog.component.scss'],
})
export class MediumBlogComponent implements OnInit {
  posts!: IMediumBlogPostsResponse;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data: IMediumBlogPostsResponse) => {
      this.posts = data;
    });
  }
}
