import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [UploadComponent],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        NgbAlertModule,
    ],
    exports: [UploadComponent],
    entryComponents: [UploadComponent],
    providers: [],
})
export class SingleUploadModule { }
