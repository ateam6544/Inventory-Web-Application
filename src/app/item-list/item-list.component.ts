import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    {id: 1, name: 'Motors',},
    {id: 2, name: 'Computers'},
    {id: 3, name: 'Pneumatics'},
    {id: 4, name: 'Tools'}
  ]
}
