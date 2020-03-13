import { Component, OnInit } from '@angular/core';
import { SubtitleService } from 'src/app/services/subtitle.service';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  styleUrls: ['./imports.component.css']
})
export class ImportsComponent implements OnInit {

  constructor(
    private subtitleService: SubtitleService
  ) { }

  ngOnInit(): void {
    this.subtitleService.setTitle('Imports');
  }

}
