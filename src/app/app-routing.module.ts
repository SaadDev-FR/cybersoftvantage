import { JobsFormComponent } from './components/jobs-form/jobs-form.component';
import { AdminHomeComponent } from './components/Admin/admin-home/admin-home.component';
import { CareersComponent } from './components/careers/careers.component';
import { ServicesComponentComponent } from './components/services-component/services-component.component';

import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TeamComponent } from './components/team/team.component';
import { CoreValuesComponent } from './components/core-values/core-values.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'project-management', component: ProjectManagementComponent },
  { path: 'core-values', component: CoreValuesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'services-component', component: ServicesComponentComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'jobs-form', component: JobsFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
