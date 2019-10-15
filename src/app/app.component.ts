import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from './content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private contentService: ContentService) { }

    public prev() {
      this.router.navigate(['item', this.contentService.id > 0 ? --this.contentService.id : this.contentService.id])
    }

    public next() {
      this.router.navigate(['item', this.contentService.id < this.contentService.data.length - 1 ? ++this.contentService.id : this.contentService.id])
    }
}
