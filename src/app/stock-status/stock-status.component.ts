import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent {

  @Output() stockValueChange = new EventEmitter();
  updatedstockvalue: number;

  constructor() { }

  stockValueChanged() {
    this.stockValueChange.emit({updatedstockvalue: this.updatedstockvalue });
    this.updatedstockvalue = null;
  }

}
