import { TestBed, inject } from '@angular/core/testing';
import { RollService } from './roll.service';

describe('RollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollService]
    });
  });

  it('should be created', inject([RollService], (service: RollService) => {
    expect(service).toBeTruthy();
  }));

  it('roll10 should roll between 1 and 10', inject([RollService], (service: RollService) => {
    for (let i = 0; i < 100; i++) {
      expect(service.roll10()).toBeWithinRange(1, 10);
    }
  }));

  it('roll10 should roll between 1 and 100', inject([RollService], (service: RollService) => {
    for (let i = 0; i < 1000; i++) {
      expect(service.roll100()).toBeWithinRange(1, 100);
    }
  }));
});
