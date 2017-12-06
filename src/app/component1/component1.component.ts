import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @Output() myEvent= new EventEmitter();

  constructor(private _dataService:DataService) { }

  ngOnInit() {
  }
  
  onClick(min, max, building){
    var gold = this._dataService.generateGold(min, max);
    var summary = this._dataService.generateSummary(gold, building);
    this.myEvent.emit(this._dataService.getGoldCount());
  }

}
