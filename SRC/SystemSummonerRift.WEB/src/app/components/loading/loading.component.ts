import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
export interface LoadingState {
  count: number;
  }
@Component({
  selector: 'app-loader',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  count = 0;
  private subscription: Subscription;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.subscription = this.loadingService.loaderState
    .subscribe((state: LoadingState) => {
      this.count = state.count;
      // console.log('COMPONENT', this.count)
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
