import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemConfig } from '../../models/item-config.model';

@Component({
  selector: 'app-grid-item',
  standalone: true,
  imports: [],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.scss'
})
export class GridItemComponent {
  @Input({ required: true }) config!: ItemConfig;
  @Output() configChange = new EventEmitter<ItemConfig>();

  onChangeWidth(event: Event) {
    const target = event.target as HTMLInputElement;
    const config: ItemConfig = {
      id: this.config.id,
      width: +target.value,
      height: this.config.height,
    }
    this.configChange.emit(config);
  }

  onChangeHeight(event: Event) {
    const target = event.target as HTMLInputElement;
    const config: ItemConfig = {
      id: this.config.id,
      width: this.config.width,
      height: +target.value,
    }
    this.configChange.emit(config);
  }
}
