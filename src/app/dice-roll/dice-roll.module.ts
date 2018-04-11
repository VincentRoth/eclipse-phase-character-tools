import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceRollComponent } from './dice-roll.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DiceRollComponent
  ],
  exports: [
    DiceRollComponent
  ]
})
export class DiceRollModule { }
