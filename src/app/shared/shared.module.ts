import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RollService } from './roll/roll.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    RollService,
    TranslateModule.forChild().providers
  ],
  exports: [
    TranslateModule
  ]
})
export class SharedModule { }
