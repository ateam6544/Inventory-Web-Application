import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface ItemElement {
  id: number;
  name: string;
  quantity: number;
}

const ITEM_DATA: ItemElement[] = [
  {id: 1, name: 'TalonSRX', quantity: 15},
  {id: 1, name: 'VictorSPX',quantity: 15},
];

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['name', 'location', 'quantity', 'actions'];
  dataSource = ITEM_DATA;

  searchValue = '';

  onAddItem(){

  }

}
