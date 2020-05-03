import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

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
