import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.scss']
})
export class DisplayContentComponent implements OnInit {

  public title: string;
  public subTitle: string;
  public content: string;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.contentService.id = +p.get('id');
      const data = this.contentService.data[this.contentService.id];
      this.title = data.title;
      this.content = data.content;
    });
  }

}
