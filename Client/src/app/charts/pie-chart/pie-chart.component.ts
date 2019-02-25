import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieChartData: number[] = [350, 450, 120];
  public pieChartLabels: string[] = ['XYZ Logistics', 'Main St Bakery', 'Acme Hosting' ];
  public colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111'
    }
  ];
  public pieChartType = 'doughnut';

  ngOnInit() {
  }

}
