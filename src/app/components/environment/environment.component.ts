import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {

  constructor() { }

  listOfData = [
    {
      key: '20201211',
      name: 'John Brown',
      value: "在校",
      error: '无'
    },
    {
      key: '20201212',
      name: 'Jim Green',
      value: "离校",
      error: '病假'
    },
    {
      key: '20201213',
      name: 'Joe Black',
      value: "在校",
      error: '无'
    },
    {
      key: '20201214',
      name: 'Jim Green',
      value: "在校",
      error: '无'
    },
    {
      key: '20201215',
      name: 'Jim Green',
      value: "离校",
      error: '无'
    },
    {
      key: '20201216',
      name: 'Jim Green',
      value: "在校",
      error: '无'
    },
  ];

  ngOnInit(): void {
  }

}
