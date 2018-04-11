import { Component, OnInit } from '@angular/core';
import { RollService } from '../shared/roll/roll.service';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {

  constructor(private rollService: RollService) { }

  ngOnInit() {
  }

}
