import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleApiModule, GoogleApiService, GoogleAuthService, NG_GAPI_CONFIG, } from 'ng-gapi';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatLabelModule } from '@angular/material/label';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EpicSevenDbService } from './epic-seven-db/epic-seven-db.service';
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
import { UserService } from './google-apis/user.service';
import { SimpleConfirmationDialogComponent } from './simple-confirmation-dialog/simple-confirmation-dialog.component';
import { GoogleApiDriveService } from './google-apis/google-api-drive.service';
import { NgGapiClientConfig } from '.googlea-apis/ng-gapi-client-config';

let gapiClientConfig: NgGapiClientConfig = {
    client_id: "67284234435-gmnl6t5erjgsltso9l2vne1125n139f0.apps.googleusercontent.com",
    discoveryDocs: [
      "https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"
    ],
    scope: [
        "https://www.googleapis.com/auth/drive.appdata",
        "https://www.googleapis.com/auth/analytics.readonly",
        "https://www.googleapis.com/auth/analytics"
    ].join(" "),
    redirect_uri: [
      "urn:ietf:wg:oauth:2.0:oob",
      "https://angular-fw8cqq.stackblitz.io",
      "http://localhost"
    ].join (" "),
};

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
    BrowserAnimationsModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
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
    RegisterComponent,
    SimpleConfirmationDialogComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [EpicSevenDbService, UserService, GoogleApiDriveService],
  entryComponents: [
    SimpleConfirmationDialogComponent,
  ]
})
export class AppModule { }
