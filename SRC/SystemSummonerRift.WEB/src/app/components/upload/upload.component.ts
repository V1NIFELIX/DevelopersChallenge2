import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

  ngOnInit() {

  }

  // alerts: Alert[];

  @Input()
  endPoint: string;

  fileData1: File = null;
  fileData2: File = null;
  jsonData : string;

  uploading = false;
  fileOneLoaded = false;
  fileTwoLoaded = false;
  response : any;

  progress = 0;

  success: boolean = false;
  error: boolean = false;
  errorMsg: string;

  // close(alert: Alert) {
  //   this.alerts.splice(this.alerts.indexOf(alert), 1);
  // }

  constructor(private http: HttpClient, private toastService: ToastService) { }

  fileChange1(event) {
    this.fileData1 = event.target.files[0];
    this.fileOneLoaded = true;
  }
  fileChange2(event) {
    this.fileData2 = event.target.files[0];
    this.fileTwoLoaded = true;
  }

  async onSubmit() {
    this.uploading = true;    

    const formData = new FormData();
    formData.append('file1', this.fileData1);
    formData.append('file2', this.fileData2);
  

    this.http.post(`${environment.ApiUrl}/${this.endPoint}`, formData).subscribe(response => {
      this.success = true;
      this.toastService.show('File upload succeded', { classname: 'bg-success text-light', delay: 5000 })
    },err => {
      let _err: any = err;
      this.error = true;
      this.errorMsg = _err.error.errorMessage
      this.toastService.show(this.errorMsg, { classname: 'bg-danger text-light', delay: 5000 })
    });
    
  }
}
