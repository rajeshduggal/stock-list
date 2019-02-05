import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent {

  @Input() productId: number;
  @Input() stock: number;
  @Output() stockValueChange = new EventEmitter();
  updatedstockvalue: number;

  constructor() { }

  stockValueChanged() {
    this.stockValueChange.emit({id: this.productId, updatedstockvalue: this.updatedstockvalue });
    this.updatedstockvalue = null;
  }

}
