import { Component } from '@angular/core';
import { GridItemComponent } from './grid-item/grid-item.component';
import { CommonModule } from '@angular/common';
import { ItemConfig } from '../models/item-config.model';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, GridItemComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  gridItems: ItemConfig[] = [
    { id: 1, width: 1, height: 1 },
    { id: 2, width: 2, height: 1 },
    { id: 3, width: 2, height: 2 },
    { id: 4, width: 1, height: 1 },
    { id: 5, width: 1, height: 1 },
    { id: 6, width: 1, height: 1 },
  ];

  onConfigChange(config: ItemConfig) {
    const index = this.gridItems.findIndex(item => item.id === config.id);
    if (index !== -1) {
      this.gridItems = [
        ...this.gridItems.slice(0, index),
        config,
        ...this.gridItems.slice(index + 1)
      ];
    } else {
      console.error("Item not found");
    }
  }

  getItemClasses(item: ItemConfig) {
    return {
      ['grid-col-span-' + item.width]: true,
      ['grid-row-span-' + item.height]: true
    };
  }

}
