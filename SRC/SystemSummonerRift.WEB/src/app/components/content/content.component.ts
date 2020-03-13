import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import * as moment from 'moment';

import { SubtitleService, Subtitle } from '../../services/subtitle.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(private subtitleService: SubtitleService) {
    
   }

  title: string;
  year: string;
  subtitle: any;

  ngOnInit() {
    let _approot = new AppComponent();
    this.title = _approot.title;

    this.year = moment().format('Y');

    this.subscription = this.subtitleService.title
    .subscribe((state: Subtitle) => {
      this.subtitle = state.name;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
