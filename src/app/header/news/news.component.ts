import { Component, OnInit } from '@angular/core';
import { NewsModule } from './news-module';
import { RouterLink } from '@angular/router';
import { NzDestroyService } from 'ng-zorro-antd/core/services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  standalone: true,
  imports: [RouterLink],
  providers: [NzDestroyService],
})
export class NewsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  clickkkk() {
    alert('hello');
  }
}
