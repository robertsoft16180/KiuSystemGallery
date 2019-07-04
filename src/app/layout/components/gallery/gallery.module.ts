import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule, MatButtonModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatSelectModule } from '@angular/material';
import { PhotoComponent } from './photo/photo.component';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../modal/modal.service';
import { GridsterModule } from 'angular-gridster2';

const MaterialModules = [
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule
];

@NgModule({
    imports: [
        CommonModule,
        GalleryRoutingModule,
        MaterialModules,
        GridsterModule
    ],
    declarations: [GalleryComponent, PhotoComponent, ModalComponent],
    entryComponents: [
        ModalComponent
    ],
    providers: [
        ModalService,
        { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
    ]
})
export class GalleryModule {}
