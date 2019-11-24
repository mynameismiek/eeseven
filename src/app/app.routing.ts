import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Route Components
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

import { LoggedInGuardService } from './logged-in-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'team-builder', component: TeamBuilderComponent, canActivate: [LoggedInGuardService] },
  { path: 'heroes', component: HeroesComponent, canActivate: [LoggedInGuardService] },
  { path: 'artifacts', component: ArtifactsComponent, canActivate: [LoggedInGuardService] },
  { path: 'equipment', component: EquipmentComponent, canActivate: [LoggedInGuardService] },
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);