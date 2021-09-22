import { Component, AfterViewInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import * as c3 from 'c3';
import { NgxSpinnerService } from 'ngx-spinner';

declare var require: any;

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements AfterViewInit {
    constructor(private spinner:NgxSpinnerService) {
      
      }

    // Barchart
    barChart: Chart = {
        type: 'Bar',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [[50, 40, 30, 70, 50, 20, 30]]
        },
        options: {
            height: 290,
            chartPadding: {
                top: 15,
                left: -25
            },
            axisX: {
                showLabel: true,
                showGrid: false
            },
            axisY: {
                showLabel: false,
                showGrid: false
            },
            fullWidth: true
        }
    };

    // Line chart
    lineChart: Chart = {
        type: 'Line',
        data: {
            labels: ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
            series: [[2, 0, 5, 2, 5, 2]]
        },
        options: {
            showArea: true,
            showPoint: false,

            chartPadding: {
                left: -35
            },
            axisX: {
                showLabel: true,
                showGrid: false
            },
            axisY: {
                showLabel: false,
                showGrid: true
            },
            fullWidth: true
        }
    };

    ngAfterViewInit() {
        console.log('From sdales');
        
        this.spinner.hide()
        const chart2 = c3.generate({
            bindto: '#product-sales',
            data: {
                columns: [
                    ['user', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                    // ['Ipad', 1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3]
                ],
                type: 'spline'
            },
            axis: {
                y: {
                    show: true,
                    tick: {
                        count: 0,
                        outer: false
                    }
                },
                x: {
                    show: true
                }
            },
            padding: {
                top: 40,
                right: 10,
                bottom: 40,
                left: 20
            },
            point: {
                r: 0
            },
            legend: {
                hide: false
            },
            color: {
                pattern: ['#fbb03b']
            }
        });
    }
     // This is line chart
  // bar chart
  public lineChartLegend = true;
  public lineChartType = 'line';

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 10
  };

  public barChartLabels: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [ 
    { data: [65, 59, 80, 81, 56, 55, 40, 65, 64, 2, 3, 55], label: 'Sales' },
  ];
  public barChartColors: Array<any> = [
    { backgroundColor: '#9ECB2E' }
  ];

//   user
public barChartLabels1: string[] = [
    'Area 1',
    'Area 2',
    'Area 3',
    'Area 4',
    'Area 5',
    'Area 6',
    'Area 7',
    'Area 8',
    'Area 9',
  ];
  public barChartColors1: Array<any> = [
    { backgroundColor: '#9ECB2E' }
  ];
  public barChartData1: any[] = [ 
    { data: [65, 59, 80, 81, 56, 55, 40, 65, 64, 2, 3, 55], label: 'Revenue' },
  ];
  public barChartLabels2: string[] = [
    'Area 1',
    'Area 2',
    'Area 3',
    'Area 4',
    'Area 5',
    'Area 6',
    'Area 7',
    'Area 8',
    'Area 9',
  ];
}
