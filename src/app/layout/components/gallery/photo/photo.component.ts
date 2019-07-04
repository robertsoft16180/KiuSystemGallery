import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Photo } from '../../../../interfaces/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnDestroy {


  private destroySubject$: Subject<void> = new Subject();
  constructor(private modalService: ModalService) { }

  @Input() photo: Photo;

  ngOnInit() {
  }

  openModal(photo: Photo): any {
    this.modalService.showModal(photo)
                     .pipe(takeUntil(this.destroySubject$))
                     .subscribe( (data: any) => {
                       console.log(data);
                     });
  }

  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.subscribe(data => console.log(data));
  }

}
