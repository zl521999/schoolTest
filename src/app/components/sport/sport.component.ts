import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor() { }

  listOfData = [
    {
      key: '20201211',
      name: 'John Brown',
      today: "103",
      yesterday: '-86',
      monvethAve:"476",
      sportAll:"良"
    },
    {
      key: '20201212',
      name: 'Jim Green',
      today: "103",
      yesterday: '-70',
      monvethAve:"176",
      sportAll:"差"
    },
    {
      key: '20201213',
      name: 'Joe Black',
      today: "103",
      yesterday: '-86',
      monvethAve:"476",
      sportAll:"良"
    },
    {
      key: '20201214',
      name: 'Jim Green',
      today: "103",
      yesterday: '-86',
      monvethAve:"476",
      sportAll:"良"
    },
    {
      key: '20201215',
      name: 'Jim Green',
      today: "103",
      yesterday: '-70',
      monvethAve:"176",
      sportAll:"差"
    },
    {
      key: '20201216',
      name: 'Jim Green',
      today: "1333",
      yesterday: '+86',
      monvethAve:"976",
      sportAll:"优"
    },
  ];

  ngOnInit(): void {
  }

}
