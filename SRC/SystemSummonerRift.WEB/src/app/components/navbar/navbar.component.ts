import { Component, OnInit, Input } from '@angular/core';

import { MenuManager } from './menu.manager';

import { Title } from '@angular/platform-browser';
import { SubtitleService } from '../../services/subtitle.service';
import { AppComponent } from 'src/app/app.component';
import { faGlobeAmericas, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title : string
  faGlobeAmericas : IconDefinition = faGlobeAmericas;

  public menuHelper = new MenuManager();

  public items : any = [];

  public constructor(titleService: Title, private subtitleService: SubtitleService) {

    let _approot = new AppComponent()
    this.title = _approot.title;
    // titleService.setTitle(this.title);
  }

  setTitle(title: any):void{
    this.subtitleService.setTitle(title);
  }

  ngOnInit() {
    this.items = this.menuHelper.getAllowedMenu();

    // console.log(this.items);
  }
}
