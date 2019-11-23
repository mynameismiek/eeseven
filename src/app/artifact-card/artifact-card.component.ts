import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artifact-card',
  templateUrl: './artifact-card.component.html',
  styleUrls: ['./artifact-card.component.css']
})
export class ArtifactCardComponent implements OnInit {
  @Input() artifact: Object;

  constructor() {
  }

  ngOnInit() {
  }

}