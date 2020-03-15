import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import  {ReportsService} from 'src/app/services/reports.service';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reportsList: Array<any> = [];

  @Output() filtrosOutput = new EventEmitter();

  public filterButtonText: any = "Exibir Filtros";

  constructor(
    private reportsService: ReportsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.reportsService.get().then(result => {
      const _result: any = result;
      this.reportsList = _result;
    })
  }


  applyFilters(seletores: any): void {
    this.getWithParam(seletores);

  }
  getWithParam(seletor){
    this.reportsService.getWithParams(seletor).then(result => {
      const _result: any = result;
      this.reportsList = _result;
    })
  }

  toggleFilter(): void {
    var x = document.getElementById("card-filtros");
    if (x.style.display === "none") {
      x.style.display = "block";
      this.filterButtonText = "Ocultar Filtros"
    } else {
      x.style.display = "none";
      this.filterButtonText = "Exibir Filtros"
    }
  }

  solicitarBase(){
    this.downloadCSV({ data: this.reportsList, filename: "filename.csv" })
  }

  public convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;
    var filter = args.filter || [""]; //default fields to exclude

    data = args.data || null;
    if (data == null || !data.length) {
      return null;
    }

    columnDelimiter = args.columnDelimiter || ';';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    keys.forEach(function (key) {

      if (typeof data[0][key] == "object" && data[0][key]) {
        let subitemshead = Object.keys(data[0][key]);
        subitemshead.map(subitemhead => {
          result += subitemhead.toUpperCase() + "" + columnDelimiter
        });
      }else{
        if (!filter.includes(key)) {
          result += key.toUpperCase() + "" + columnDelimiter;
        }
      }
    });
    result += lineDelimiter;

    data.forEach(function (item) {
      ctr = 0;
      keys.forEach(function (key) {
        if (!filter.includes(key)) {
          if (item[key] != null) {
            if (typeof item[key] == "object") {
              if (item[key].length != 0) {
                let subitems = Object.keys(item[key]);

                subitems.map((subitem: any) => {
                  let subitemValue = item[key][subitem];
                  if (subitemValue)
                    result += subitemValue
                    result = result.toUpperCase();
                    result += columnDelimiter;
                })
              }
            } else {
              var a = item[key].toString();
              result += a.toUpperCase();
              result += columnDelimiter;
            }
          } else {
            result += " ";
            result += columnDelimiter;
          }

        }
        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  public downloadCSV(args) {
    var data, filename, link;
    var csv = this.convertArrayOfObjectsToCSV({
      data: args.data
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
  }



}
