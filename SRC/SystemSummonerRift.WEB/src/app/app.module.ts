import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

// Bootstrap
import { NgbModule, NgbAlertModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';



// FontAwesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


/*3rd*/
// Storage
import { NgxWebstorageModule } from 'ngx-webstorage';
// Upload
import { FileUploadModule } from 'ng2-file-upload';


//Loading Service
import { HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { LoadingInterceptorService } from './services/loading-interceptor.service';

// Datepicker
import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n, I18n } from './components/datepicker/CustomDatepickerI18n';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';



//Componentes and Pages
import { FiltroComponent as FilaFiltroComponent } from '../app/pages/report/filtro/filtro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { ModalComponent } from './components/modal/modal.component';

import { GenericUploadComponent } from './components/generic-upload/generic-upload.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { SingleUploadModule } from './components/upload/upload.module';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './components/content/content.component';
import { RouterModule } from '@angular/router';
import {routes} from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ImportsComponent } from './pages/imports/imports.component';
import { ReportComponent } from './pages/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    GenericUploadComponent,
    DatepickerComponent,
    ContentComponent,
    NavbarComponent,
    ToastsContainerComponent,
    LoadingComponent,
    ImportsComponent,
    ReportComponent,
    FilaFiltroComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SingleUploadModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    FontAwesomeModule,
    FileUploadModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

  title: string;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
    let _approot = new AppComponent();
    this.title = _approot.title;
  }
 }
