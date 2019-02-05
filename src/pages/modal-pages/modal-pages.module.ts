import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPagesPage } from './modal-pages';

@NgModule({
  declarations: [
    ModalPagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPagesPage),
  ],
})
export class ModalPagesPageModule {}
