import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArtifactEditorDialogData } from './artifact-editor-dialog-data';
import { ArtifactData } from '../interfaces/artifact-data';
import { Artifact } from '../interfaces/artifact';

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
    @Inject(MAT_DIALOG_DATA) public data: ArtifactEditorDialogData) {
      this.artifact$ = data.artifact;
      this.userArtifacts$ = data.userArtifacts;
    }

  ngOnInit() {
  }

  decreaseLimit(uArtifact: Artifact): void {
    uArtifact.limit -= 1;
    uArtifact.limit = (uArtifact.limit <= 0) ? 0 : uArtifact.limit;
  }

  increaseLimit(uArtifact: Artifact): void {
    uArtifact.limit += 1;
    uArtifact.limit = (uArtifact.limit >= 5) ? 5 : uArtifact.limit;
  }

  save(): void {

    this.dialogRef.close();
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}