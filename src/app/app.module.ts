import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EpicSevenDbService } from './epic-seven-db.service';
import { HomeComponent } from './home/home.component';
import { ArtifactEditorComponent } from './artifact-editor/artifact-editor.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentEditorComponent } from './equipment-editor/equipment-editor.component';
import { TeamBuilderComponent } from './team-builder/team-builder.component';
import { UnitCardComponent } from './unit-card/unit-card.component';
import { UnitEditorComponent } from './unit-editor/unit-editor.component';
import { UnitsComponent } from './units/units.component';
import { ArtifactCardComponent } from './artifact-card/artifact-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'team-builder', component: TeamBuilderComponent },
      { path: 'units', component: UnitsComponent },
      { path: 'artifacts', component: ArtifactsComponent },
      { path: 'equipment', component: EquipmentComponent },
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    ArtifactEditorComponent,
    ArtifactsComponent,
    EquipmentComponent,
    EquipmentEditorComponent,
    TeamBuilderComponent,
    UnitCardComponent,
    UnitEditorComponent,
    UnitsComponent,
    ArtifactCardComponent,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [EpicSevenDbService, UserService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/