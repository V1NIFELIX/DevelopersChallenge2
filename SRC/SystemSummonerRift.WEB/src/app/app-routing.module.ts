import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Pages
import { HomeComponent } from './pages/home/home.component';
import { ImportsComponent } from './pages/imports/imports.component';
import { ReportComponent } from './pages/report/report.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'imports',
    component: ImportsComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
