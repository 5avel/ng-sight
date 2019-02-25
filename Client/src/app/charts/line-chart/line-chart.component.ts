import { Component, OnInit } from '@angular/core';
import {LINE_CHART_COLORS} from '../../shared/chart.colors';
import { from } from 'rxjs';
const SAMPLE_LINECHART_DATA: any[] = [
  {data: [32, 14, 80, 23, 56, 54], label: 'Sentiment Analysis'},
  {data: [12, 18, 60, 13, 36, 26], label: 'Image Rcognition'},
  {data: [25, 49, 60, 53, 68, 62], label: 'Forecasting'}
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = SAMPLE_LINECHART_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartColors = LINE_CHART_COLORS;
  lineChartType = 'line';


  ngOnInit() {
  }

}
