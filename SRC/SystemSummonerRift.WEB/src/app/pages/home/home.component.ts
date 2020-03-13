import { Component, OnInit, NgZone, ApplicationRef } from '@angular/core';
import { SubtitleService } from 'src/app/services/subtitle.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };
  constructor(
    private _http: HttpClient,
    private subtitleService: SubtitleService,
    private appRef: ApplicationRef) {
	}

  ngOnInit() {
      this.subtitleService.setTitle('Home');
  }

}
