import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filteredString: string = '';

  users = [{
    name: 'Virat Kohli'
  },
  {
    name: 'Rohit Sharma'
  },
  {
    name: 'Sachin Tendulkar'
  },
  {
    name: 'MS Dhoni'
  },
  {
    name: 'Hardik Pandya'
  },
  {
    name: 'Ravindra Jadeja'
  },
  {
    name: 'Shikhar Dhawan'
  },
  {
    name: 'Yuvraj Singh'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
