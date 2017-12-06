import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  summary:Array<string> = [];
  constructor(private _dataService:DataService) { }
  populate(){
    this.summary = this._dataService.getSummary();
  }
  ngOnInit() {
    this.populate();
  }

}
