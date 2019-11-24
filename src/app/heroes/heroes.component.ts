import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MAT_SNACK_BAR_CONFIG } from '@angular/material/snack-bar';
import { EpicSevenDbService } from '../epic-seven-db/epic-seven-db.service';
import { E7dbHeroData } from '../epic-seven-db/e7db-hero-data';
import { E7dbHeroQuery } from '../epic-seven-db/e7db-hero-query';
import { SimpleConfirmationDialogComponent } from '../simple-confirmation-dialog/simple-confirmation-dialog.component';
import { HeroData } from '../interfaces/hero-data';
import { Hero } from '../interfaces/hero';
import { StatType } from '../interfaces/stat-type';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  durationInSeconds = 5;
  displayedColumns: string[] = ['image', 'rarity', 'element', 'classType', 'name', 'owned', 'tools'];
  heroes$;

  constructor(public dialog: MatDialog,
              public changeRef: ChangeDetectorRef,
              private snackBar: MatSnackBar,
              private dbService: EpicSevenDbService) { }

  ngOnInit() {
    this.dbService.getHeroes().subscribe((query: E7dbHeroQuery) => {
      console.log(query);
      this.heroes$ = query.results;
    });
  }

  isOwned(fileId: string): boolean {
    return false; //artifactData.find((e: ArtifactData) => e.fileId == fileId);
  }
}