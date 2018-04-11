import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollComponent } from './dice-roll.component';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { AppMaterialModule } from '../app.material.module';
import { SharedModule } from '../shared/shared.module';

describe('DiceRollComponent', () => {
  let component: DiceRollComponent;
  let fixture: ComponentFixture<DiceRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        AppMaterialModule,
        SharedModule
      ],
      declarations: [
        DiceRollComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
