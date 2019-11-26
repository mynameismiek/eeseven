import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EpicSevenDbService } from '../epic-seven-db/epic-seven-db.service';
import { E7dbArtifactData } from '../epic-seven-db/e7db-artifact-data';
import { ArtifactEditorDialogData } from './artifact-editor-dialog-data';
import { ArtifactData } from '../interfaces/artifact-data';
import { Artifact } from '../interfaces/artifact';
import { Stat } from '../interfaces/stat';
import { StatType } from '../interfaces/stat-type';

@Component({
  selector: 'app-artifact-editor',
  templateUrl: './artifact-editor.component.html',
  styleUrls: ['./artifact-editor.component.css']
})
export class ArtifactEditorComponent implements OnInit {
  artifact$;
  userArtifacts$;

  constructor(
    public dialogRef: MatDialogRef<ArtifactEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArtifactEditorDialogData,
    private dbService: EpicSevenDbService) {
      this.artifact$ = data.artifact;
      this.dbService.getArtifact(data.artifact.fileId).subscribe(data2 => {
        this.artifact$ = data2.results[0];
      });
      this.userArtifacts$ = data.userArtifacts;
    }

  ngOnInit() {
  }

  decreaseLimit(uArtifact: Artifact): void {
    uArtifact.limit -= 1;
    uArtifact.maxEnhance -= 3;
    uArtifact.limit = this.clamp(uArtifact.limit, 0, 5);
    uArtifact.maxEnhance = this.clamp(uArtifact.limit, 15, 30);
  }

  increaseLimit(uArtifact: Artifact): void {
    uArtifact.limit += 1;
    uArtifact.maxEnhance +=3;
    uArtifact.limit = this.clamp(uArtifact.limit, 0, 5);
    uArtifact.maxEnhance = this.clamp(uArtifact.limit, 15, 30);
  }

  decreaseEnhance(uArtifact: Artifact): void {
    uArtifact.enhance -= 1;
    uArtifact.enhance = this.clamp(uArtifact.enhance, 0, uArtifact.maxEnhance);
  }

  increaseEnhance(uArtifact: Artifact): void {
    uArtifact.enhance += 1;
    uArtifact.enhance = this.clamp(uArtifact.enhance, 0, uArtifact.maxEnhance);
  }

  clamp(x: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, x));
  }

  isStatEnabled(uArtifact: Artifact, stat: string): boolean {
    return this.artifact$ != undefined && 
           this.artifact$.stats != undefined &&
           this.artifact$.stats.max.hasOwnProperty(stat);
  }

  getStatValue(uArtifact: Artifact, stat: string): number {
    return Math.round(this.artifact$.stats.base[stat] + ((this.artifact$.stats.max[stat] - this.artifact$.stats.base[stat]) / 30.0) * uArtifact.enhance);
  }

  save(): void {

    this.dialogRef.close();
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}