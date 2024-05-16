import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ChartItem, EncuestasService, FileService } from '@app/_core';
import { NzModalService } from 'ng-zorro-antd';
import { NgxSpinnerService } from 'ngx-spinner';
//import HC_exporting from '../../../../../assets/lib/highcharts/modules/exporting';
//import * as Highcharts from '../../../../../assets/lib/highcharts';
var Highcharts = require("highcharts");
//HC_exporting(Highcharts);

@Component({
  selector: 'app-resultado-chart',
  templateUrl: './resultado-chart.component.html',
  styleUrls: ['./resultado-chart.component.css']
})
export class ResultadoChartComponent implements OnInit {

  @Input() titulo_encuesta:string;
  @Input() id_encuesta:number;
  @Output() onGoBackListadoAll: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private encuesta_s:EncuestasService,
    private _fileService: FileService,
    private spinner: NgxSpinnerService,
    private modal: NzModalService,
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.getChartData()
  }
  b64_pdf_file=null;
  getChartData(){
    this.spinner.show();
    this.has_file=false;this.b64_pdf_file=null;
    let _id_ecnuesta= this.id_encuesta;
    this.encuesta_s._GetResultadosChartByEncuesta(_id_ecnuesta)
    .then(async datos => {
      if (datos && datos.data) {
        let dt = datos.data;
        this.draw_chart_dependencias(dt.Dependencias);
        this.draw_chart_edades(dt.Edades);
        this.draw_chart_sexos(dt.Sexos);
        this.draw_chart_regimen(dt.Regimen);
        if(dt.iden_pdf){
            this.b64_pdf_file=await this.onGetSavedFileByCodeWithReturn(dt.iden_pdf);
        }else{
            this.b64_pdf_file=null;
            this.has_file=false;
        }
      }
      this.spinner.hide();
    })
    .catch(() => {});
  }
  //chart_dependencias,chart_edades,chart_sexos,chart_regimen
  draw_chart_dependencias(data:ChartItem[]){
    let suma = 0;
    data.forEach(f=>{
      suma+=f.Val;
    });
    let maped_data = data.map(m=>{return{name:m.Iden,type:"column",data:[suma>0?(100*m.Val/suma):0]} });
    var chart_1 = Highcharts.chart("chart_dependencias", {
      chart: {
        zoomType: 'xy'
      },
      credits: { enabled: false },
      title: {
          align: 'left',
          text: ''
      },
      xAxis: {
          type: 'category',
          categories: ['Dependencias'],
          crosshair: true
      },
      yAxis: [{ // Primary yAxis
        title: {
            text: '',
        },
        min:0,
        max:100
      }],
      legend: {
          enabled: true
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y:.2f}%'
              }
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td>{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.2f} %</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },

      series: maped_data/*[
          {
              name: "Browsers",
              type: 'column',
              data: [50.123]
          }
      ]*/
    });
  }
  draw_chart_edades(data:ChartItem[]){
    let suma = 0;
    data.forEach(f=>{
      suma+=f.Val;
    });
    let maped_data = data.map(m=>{return{name:m.Iden,type:"column",data:[suma>0?(100*m.Val/suma):0]} });
    var chart_2 = Highcharts.chart('chart_edades', {
      chart: {
        zoomType: 'xy'
      },
      credits: { enabled: false },
      title: {
          align: 'left',
          text: ''
      },
      xAxis: {
          type: 'category',
          categories: ['Edades'],
          crosshair: true
      },
      yAxis: [{ // Primary yAxis
        title: {
            text: '',
        },
        min:0,
        max:100
      }],
      legend: {
          enabled: true
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y:.2f}%'
              }
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td>{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.2f} %</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },

      series: maped_data/*[
          {
              name: "Browsers",
              type: 'column',
              data: [50.123]
          }
      ]*/
    });
  }
  draw_chart_sexos(data:ChartItem[]){
    let suma = 0;
    data.forEach(f=>{
      suma+=f.Val;
    });
    let maped_data= data.map(m=>{return {name: m.Iden, y: suma>0? m.Val/suma:0}});


    Highcharts.chart('chart_sexos', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      credits: { enabled: false },
      title: {
          text: ''
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.2f} %'
              }
          }
      },
      
      series: [{
          name: 'Sexos',
          colorByPoint: true,
          data: maped_data/*[{
              name: 'Chrome',
              y: 61.41
          }, {
              name: 'Internet Explorer',
              y: 11.84
          }, {
              name: 'Firefox',
              y: 10.85
          }]*/
      }]
  });
  }
  draw_chart_regimen(data:ChartItem[]){
    let suma = 0;
    data.forEach(f=>{
      suma+=f.Val;
    });
    let maped_data= data.map(m=>{return {name: m.Iden, y: suma>0? m.Val/suma:0}});


    Highcharts.chart('chart_regimen', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      credits: { enabled: false },
      title: {
          text: ''
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.2f} %'
              }
          }
      },
      
      series: [{
          name: 'Regimén',
          colorByPoint: true,
          data: maped_data/*[{
              name: 'Chrome',
              y: 61.41
          }, {
              name: 'Internet Explorer',
              y: 11.84
          }, {
              name: 'Firefox',
              y: 10.85
          }]*/
      }]
  });
  }


  has_file=false;
  onGetSavedFileByCodeWithReturn = async (codigo: string) =>{
    let ur_file=null,has_file=false;
    await this._fileService.getFilesById(codigo).then(resp => {
        if (resp.Success && resp.Data && resp.Data[0].content!=null){
          var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
          var len = binary.length;
          var buffer = new ArrayBuffer(len);
          var view = new Uint8Array(buffer);
          for (var i = 0; i < len; i++) {
              view[i] = binary.charCodeAt(i);
          }
          let contentType =resp.Data[0].contentType;
          //var blob = new Blob([view], { type: contentType });
          ur_file = 'data:'+contentType+';base64,'+resp.Data[0].content;  
          this.has_file=true;
          has_file=true;
        }
    });
    //return ur_file;
    return has_file?this.sanitizer.bypassSecurityTrustResourceUrl(ur_file):null;
  }
  
  volver_listado(){
    this.onGoBackListadoAll.emit(true);
  }

}
