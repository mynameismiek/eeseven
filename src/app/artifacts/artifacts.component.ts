import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MAT_SNACK_BAR_CONFIG } from '@angular/material/snack-bar';
import { EpicSevenDbService } from '../epic-seven-db/epic-seven-db.service';
import { SimpleConfirmationDialogComponent } from '../simple-confirmation-dialog/simple-confirmation-dialog.component';
import { ArtifactEditorComponent } from '../artifact-editor/artifact-editor.component';
import { E7dbArtifactData } from '../epic-seven-db/e7db-artifact-data';
import { E7dbArtifactQuery } from '../epic-seven-db/e7db-artifact-query';
import { ArtifactData } from '../interfaces/artifact-data';
import { Artifact } from '../interfaces/artifact';
import { StatType } from '../interfaces/stat-type';

let artifactData: ArtifactData = [
  { 
    fileId: "abyssal-crown", 
    enhance: 12, 
    maxEnhance: 21, 
    skill: 5, 
    maxSkill: 8, 
    limit: 2, 
    stats: [ 
      { statType: StatType.atk, value: 69 },
      { statType: StatType.hp, value: 261 },
    ]
  },
  { 
    fileId: "sira-ren", 
    enhance: 12, 
    maxEnhance: 21, 
    skill: 5, 
    maxSkill: 8, 
    limit: 2, 
    stats: [ 
      { statType: StatType.atk, value: 69 },
      { statType: StatType.hp, value: 261 },
    ]
  }
];

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {
  durationInSeconds = 5;
  displayedColumns: string[] = ['image', 'rarity', 'name', 'owned', 'tools'];
  artifacts$;

  constructor(public dialog: MatDialog,
              public changeRef: ChangeDetectorRef,
              private snackBar: MatSnackBar,
              private dbService: EpicSevenDbService) { }

  ngOnInit() {
    this.dbService.getArtifacts().subscribe((query: E7dbArtifactQuery) => {
      console.log(query);
      this.artifacts$ = query.results;
    });
  }

  getIcon(id: string): Blob {
    this.dbService.getArtifactIcon(id).subscribe(res => {
      console.log(res);
      return res;
    })
  }

  isOwned(fileId: string): boolean {
    return artifactData.find((e: ArtifactData) => e.fileId == fileId);
  }

  ownedCount(fileId: string): number {
    return artifactData.filter((e: ArtifactData) => e.fileId == fileId).length;
  }

  summon(artifact: E7dbArtifactData): void {
    let newArtifact: Artifact = {
      fileId: artifact.fileId,
      maxEnhance: 15,
      enhance: 1,
      maxSkill: 6,
      skill: 1,
      limit: 0,
      stats: []
    };
    artifact.owned = true;
    artifactData.push(newArtifact);
    this.openSnackBar(artifact.name);
    this.changeRef.detectChanges();
  }

  doEdit(artifact: E7dbArtifactData): void {
    const dialogRef = this.dialog.open(ArtifactEditorComponent, {
      width: '80%',
      data: {
        artifact: artifact,
        userArtifacts: artifactData.filter((e: ArtifactData) => e.fileId == artifact.fileId),
      }
    });
  }

  openSnackBar(artifactName: string): void {
    this.snackBar.open("Summoned " + artifactName, undefined, {
      duration: this.durationInSeconds * 1000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

  openConfirmDeleteDialog(artifact: E7dbArtifactData): void {
    const dialogRef = this.dialog.open(SimpleConfirmationDialogComponent, {
      width: '250px',
      data: { 
        title: "Confirm Delete",
        message: "Are you sure you want to delete: " + artifact.name,
        okText: "YES",
        cancelText: "NO",
        objId: artifact.fileId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ' + result);      
    });
  }
}
