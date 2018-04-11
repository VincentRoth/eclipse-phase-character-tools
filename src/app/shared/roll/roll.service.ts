import { Injectable } from '@angular/core';

function roll(from: number, to: number): number {
  return Math.trunc(Math.random() * (to - from + 1) + from);
}

@Injectable()
export class RollService {

  constructor() { }

  roll10(): number {
    return roll(1, 10);
  }

  roll100(): number {
    return roll(0, 99);
  }

  flipFlop(value: number): number {
    const ten = Math.trunc(value / 10);
    const unit = value % 10;
    return unit * 10 + ten;
  }

}
