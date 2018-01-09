import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {
  public doughnutChartLabels: string[] = [ 'BUTT', 'DANGIT'];
  private doughnutChartOptions: any = {
    responsive: true,
    tooltips: false,
    cutoutPercentage: 80,
  };
  public doughnutChartData: number[] = [55, 45];
  public doughnutChartColors: Array<any> = [
    {
      backgroundColor: ['#15A9E3','#eeeeee' ],
            borderColor: ['#15A9E3','#eeeeee' ],
    }
  ];
  public doughnutChartType: string = 'doughnut';
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

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

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }


  constructor() { }

  ngOnInit() {
  }

}
