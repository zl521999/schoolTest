import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  listOfData = [
    {
      name: '音乐教室',
      level:"优"
    },
    {
      name: '小一2班',
      level:"优"
    },
    {
      name: '小一3班',
      level:"优"
    },
    {
      name: '小一4班',
      level:"优"
    },
    {
      name: '小一6班',
      level:"优"
    },
    {
      name: '初一4班',
      level:"优"
    },
    {
      name: '食堂',
      level:"优"
    },
    {
      name: '初一5班',
      level:"优"
    },
    {
      name: '初一7班',
      level:"优"
    },

  ];

  ngOnInit(): void {
  }

}
