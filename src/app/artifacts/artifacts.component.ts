import { Component, OnInit } from '@angular/core';
import { EpicSevenDbService } from '../epic-seven-db.service';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'rarity'];
  artifacts$;

  constructor(private dbService: EpicSevenDbService) { }

  ngOnInit() {
    this.dbService.getArtifacts().subscribe(res => {
      console.log(res);
      this.artifacts$ = res.results;
    });
  }

  getIcon(id: string): Blob {
    this.dbService.getArtifactIcon(id).subscribe(res => {
      console.log(res);
      return res;
    })
  }
}