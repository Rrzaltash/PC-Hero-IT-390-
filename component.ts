import { Component, OnInit } from '@angular/core';
import { Part } from '/part';
import { PARTS } from '/parts';

@Component({
  selector: 'app-parts',
  templateUrl: './component.html',
})

export class PartsComponent implements OnInit {

  parts = PARTS;
  selectedPart: Part;

  constructor() { }

  ngOnInit() {
  }

  onSelect(part: Part): void {
    this.selectedPart = part;
  }
}