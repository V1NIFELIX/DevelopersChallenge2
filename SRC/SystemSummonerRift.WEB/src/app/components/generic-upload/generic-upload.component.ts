import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'generic-upload',
  templateUrl: './generic-upload.component.html',
  styleUrls: ['./generic-upload.component.scss']
})
export class GenericUploadComponent implements OnInit {


  @Input() endPoint : String;

  @Output() callback = new EventEmitter();


  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  fileChange(event) {

    console.log('event',event)
    let formData = new FormData();
    formData.append('file', event.target.files[0]);

    console.log('formData',formData)

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });

    this.http.post(`${environment.ApiUrl}${this.endPoint}`, formData, {
      headers
    })
    .toPromise()
    .then(response => {
      this.callback.emit(response);
      let el : any = document.querySelector('#generic-upload');
      el.value = null;
    })
    .catch(err => {
      let el : any = document.querySelector('#generic-upload');
      el.value = null;
      this.callback.emit(err);
    });
  }

}
