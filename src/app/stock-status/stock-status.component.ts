import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent implements OnChanges {

  @Input() productId: number;
  @Input() stock: number;
  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatedstockvalue: number;

  constructor() { }

  stockValueChanged() {
    this.stockValueChange.emit({id: this.productId, updatedstockvalue: this.updatedstockvalue });
    this.updatedstockvalue = null;
  }

  ngOnChanges() {
    if (this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }
}
