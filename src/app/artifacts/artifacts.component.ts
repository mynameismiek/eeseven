import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EpicSevenDbService } from '../epic-seven-db/epic-seven-db.service';
import { E7dbArtifactData } from '../epic-seven-db/e7db-artifact-data';
import { E7dbArtifactQuery } from '../epic-seven-db/e7db-artifact-query';
import { SimpleConfirmationDialogComponent } from '../simple-confirmation-dialog/simple-confirmation-dialog.component';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {
  displayedColumns: string[] = ['image', 'rarity', 'name', 'owned', 'tools'];
  artifacts$;

  constructor(public dialog: MatDialog,
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
