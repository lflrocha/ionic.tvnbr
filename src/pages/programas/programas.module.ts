import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramasPage } from './programas';

@NgModule({
  declarations: [
    ProgramasPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramasPage),
  ],
})
export class ProgramasPageModule {}
