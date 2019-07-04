import { Component, OnInit } from '@angular/core';
import { ThumbnailService } from '../../thumbnail.service';

import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Photo } from '../../../interfaces/photo';
import { GridsterService } from '../../Gridster.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public photos: Photo[];

  constructor(private Thumbnail: ThumbnailService,
              private layoutService: GridsterService) { }

  ngOnInit() {

    this.Thumbnail.getAllPhotos()
                  .subscribe((data: Photo[]) => {
                    data.forEach(item => {
                      this.layoutService.addItem(item);
                    });
                  });
  }

  get options(): GridsterConfig {
    return this.layoutService.options;
  }
  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }

}
