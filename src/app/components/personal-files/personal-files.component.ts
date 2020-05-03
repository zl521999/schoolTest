import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-files',
  templateUrl: './personal-files.component.html',
  styleUrls: ['./personal-files.component.css']
})
export class PersonalFilesComponent implements OnInit {

  constructor() { }

  options:any;
  

  ngOnInit(): void {

    this.options = {
      grid:{
        height:"80%",
        bottom:10
      },
      xAxis: {
          type: 'category',
          
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [0,95],
          type: 'line',
          smooth: true
      }]
  };
  }

 

}
