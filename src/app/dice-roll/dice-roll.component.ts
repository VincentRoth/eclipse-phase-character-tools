import { Component, OnInit } from '@angular/core';
import { RollService } from '../shared/roll/roll.service';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {

  diceValue: number;
  dicesDetail: number[];

  is10Dice: boolean;
  is100Dice: boolean;

  constructor(private rollService: RollService) { }

  ngOnInit() {
    this.dicesDetail = [];
    this.is10Dice = false;
    this.is100Dice = false;
  }

  roll10Dice() {
    this.is10Dice = true;
    this.is100Dice = false;

    this.diceValue = this.rollService.roll10();
    this.dicesDetail = [this.diceValue];
  }

  sum10Dice() {
    this.dicesDetail.push(this.rollService.roll10());
    this.diceValue = this.dicesDetail.reduce((sum, value) => sum + value);
  }

  displayDicesSum(): string {
    return this.dicesDetail.join(' + ');
  }

  roll100Dice() {
    this.is10Dice = false;
    this.is100Dice = true;

    this.diceValue = this.rollService.roll100();
  }

  isCritical(): boolean {
    return this.diceValue % 11 === 0;
  }

  canFlipFlop(): boolean {
    return this.is100Dice && !this.isCritical() && this.diceValue > this.rollService.flipFlop(this.diceValue);
  }

  flipFlop() {
    this.diceValue = this.rollService.flipFlop(this.diceValue);
  }

}
