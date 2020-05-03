import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  constructor() { }

  listOfData = [
    {
      key: '20201211',
      name: 'John Brown',
      temp: "37.1",
      errorNum: '3',
      level:"优"
    },
    {
      key: '20201212',
      name: 'Jim Green',
      temp: "37.1",
      errorNum: '3',
      level:"优"
    },
    {
      key: '20201213',
      name: 'Joe Black',
      temp: "37.4",
      errorNum: '6',
      level:"良"
    },
    {
      key: '20201214',
      name: 'Jim Green',
      temp: "37.4",
      errorNum: '5',
      level:"良"
    },
    {
      key: '20201215',
      name: 'Jim Green',
      temp: "37.4",
      errorNum: '5',
      level:"良"
    },
    {
      key: '20201216',
      name: 'Jim Green',
      temp: "37.9",
      errorNum: '8',
      level:"差"
    },
  ];


  ngOnInit(): void {
  }

}
