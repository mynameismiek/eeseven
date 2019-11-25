import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
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
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

// App Components
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { ArtifactEditorComponent } from './artifact-editor/artifact-editor.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentEditorComponent } from './equipment-editor/equipment-editor.component';
import { TeamBuilderComponent } from './team-builder/team-builder.component';
import { UnitCardComponent } from './unit-card/unit-card.component';
import { UnitEditorComponent } from './unit-editor/unit-editor.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ArtifactCardComponent } from './artifact-card/artifact-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SimpleConfirmationDialogComponent } from './simple-confirmation-dialog/simple-confirmation-dialog.component';

// App Services
import { EpicSevenDbService } from './epic-seven-db/epic-seven-db.service';
import { LoggedInGuardService } from './logged-in-guard.service';
import { UserService } from './google-apis/user.service';

// Other
import { GoogleApiDriveService } from './google-apis/google-api-drive.service';
import { NgGapiClientConfig } from '.googlea-apis/ng-gapi-client-config';
import { ModalService } from './modal.service';

let gapiClientConfig: NgGapiClientConfig = {
    client_id: "67284234435-65p0ak2ubfuvd08oq7as9oiuppk0hec0.apps.googleusercontent.com",
    discoveryDocs: [
      // "https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"
    ],
    scope: [
        "https://www.googleapis.com/auth/drive.appdata",
        // "https://www.googleapis.com/auth/analytics.readonly",
        // "https://www.googleapis.com/auth/analytics"
    ].join(" "),
    redirect_uri: [
      "https://angular-fw8cqq.stackblitz.io",
      "http://localhost"
    ].join (" "),
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRouting,
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
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
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
    HeroesComponent,
    ArtifactCardComponent,
    LoginComponent,
    RegisterComponent,
    SimpleConfirmationDialogComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    EpicSevenDbService, 
    LoggedInGuardService, 
    UserService, 
    GoogleApiDriveService, 
    ModalService
  ],
  entryComponents: [
    ArtifactEditorComponent,
    SimpleConfirmationDialogComponent,
  ]
})
export class AppModule { }
