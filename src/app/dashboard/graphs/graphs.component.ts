import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

public pieChartType: string = 'pie';


public doughnutChartLabels: string[] = [ 'Batman', 'Dinosaur', 'Yeti'];
private doughnutChartOptions: any = {
  responsive: true,
};
public doughnutChartData: number[] = [25, 45, 30];
public doughnutChartColors: Array<any> = [
  {
    backgroundColor: ['rgba(21,169,227, 1)','rgba(21,169,227, .75)', 'rgba(21,169,227, .5)' ],
    borderColor: ['#fff','#fff', '#fff' ],
  }
];
public doughnutChartType: string = 'doughnut';


public gaugeChartLabels: string[] = [ 'label', 'label'];
private gaugeChartOptions: any = {
  responsive: true,
  tooltips: false,
  cutoutPercentage: 80,
};
public gaugeChartData: number[] = [55, 45];
public gaugeChartColors: Array<any> = [
  {
    backgroundColor: ['#15A9E3','#eeeeee' ],
          borderColor: ['#15A9E3','#eeeeee' ],
  }
];
public gaugeChartType: string = 'doughnut';


public lineChartData:Array<any> = [
  {data: [165, 159, 160, 181, 256, 155, 340, 401, 234, 100, 104, 278, 300, 250, 312, 311, 250, 275, 334, 187], label: 'Leads '},
  {data: [105, 99, 120, 81, 136, 125, 200, 201, 104, 50, 45, 120, 140, 100, 112, 156, 106, 132, 160, 190], label: 'Sales'},
];
public lineChartLabels:Array<any> = ['1', '', '', '', '', '', '', '', '', '', '', '', '', '', '15', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '30'];
public lineChartOptions:any = {
  showScale: false,
  responsive: true,
  gridLines: {
drawBorder: false
},
  scales: {
  xAxes: [{
              gridLines: {
                  display:false
              }
          }],
  yAxes: [{
              gridLines: {
                  display:false,
              }
          }]
  }

};
public lineChartColors:Array<any> = [

  { // leads
    backgroundColor: 'rgba(21,169,227,.2)',
    borderColor: 'rgba(21,169,227,0)',
    pointBackgroundColor: 'rgba(21,169,227,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(21,169,227,1)'
  },
  { // sales
    backgroundColor: 'rgba(21,169,227,1)',
    borderColor: 'rgba(21,169,227,0)',
    pointBackgroundColor: 'rgba(21,169,227,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(21,169,227,0.8)'
  },
];
public lineChartLegend:boolean = true;
public lineChartType:string = 'line';


public barChartOptions:any = {
showScale: false,
responsive: true,
gridLines: {
drawBorder: false
},
scales: {
xAxes: [{
            gridLines: {
                display:false
            }
        }],
yAxes: [{
            gridLines: {
                display:false,
            }
        }]
}
  };
  public barChartLabels:string[] = ['January', 'February', 'March', 'April', 'May', 'June',];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55], label: 'New'},
    {data: [28, 48, 40, 19, 86, 27], label: 'Returning'}
  ];
  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(21,169,227, .5)',
      borderColor: 'rgba(21,169,227, .5)',
    },
    {
      backgroundColor: 'rgba(21,169,227, 1)',
      borderColor: 'rgba(21,169,227, 1)',
    },
  ];
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

constructor() { }

ngOnInit() {
}

}
