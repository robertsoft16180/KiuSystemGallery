import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType } from 'angular-gridster2';

import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class GridsterService {

  public options: GridsterConfig = {
    gridType: GridType.Fit,
    compactType: CompactType.None,
    draggable: {
      enabled: true
    },
    pushItems: true,
    resizable: {
      enabled: false
    },
    displayGrid: 'none',
    outerMargin: true,
    setGridSize: true,
    swap: true,
    margin: 15,
    minCols: 5,
    maxCols: 10,
    minRows: 5,
    maxRows: 50,
    maxItemCols: 100,
    minItemCols: 1,
    maxItemRows: 100,
    minItemRows: 1,
    maxItemArea: 2500,
    minItemArea: 1,
    defaultItemCols: 1,
    defaultItemRows: 1,
    mobileBreakpoint: 640,
  };
  public layout: GridsterItem[] = [];
  constructor() { }

  addItem(photo: Photo): void {
    this.layout.push({
      cols: 1,
      rows: 2,
      id: photo.id,
      x: 0,
      y: 0,
      photo
    });
  }
  deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
  }
}
