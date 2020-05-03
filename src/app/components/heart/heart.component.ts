import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {

  constructor() { }

  listOfData = [
    {
      key: '20201211',
      name: 'John Brown',
      realHeat: "103",
      aveHeat: '86',
      minHeat:"76",
      maxHeat:"109"
    },
    {
      key: '20201212',
      name: 'Jim Green',
      realHeat: "103",
      aveHeat: '86',
      minHeat:"76",
      maxHeat:"109"
    },
    {
      key: '20201213',
      name: 'Joe Black',
      realHeat: "103",
      aveHeat: '86',
      minHeat:"76",
      maxHeat:"109"
    },
    {
      key: '20201214',
      name: 'Jim Green',
      realHeat: "103",
      aveHeat: '86',
      minHeat:"76",
      maxHeat:"109"
    },
    {
      key: '20201215',
      name: 'Jim Green',
      realHeat: "103",
      aveHeat: '86',
      minHeat:"76",
      maxHeat:"109"
    },
    {
      key: '20201216',
      name: 'Jim Green',
      realHeat: "103",
      aveHeat: '86',
      minHeat:"76",
      maxHeat:"109"
    },
  ];

  ngOnInit(): void {
  }

}
