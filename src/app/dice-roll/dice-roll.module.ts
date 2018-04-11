import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceRollComponent } from './dice-roll.component';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../app.material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppMaterialModule
  ],
  declarations: [
    DiceRollComponent
  ],
  exports: [
    DiceRollComponent
  ]
})
export class DiceRollModule { }
