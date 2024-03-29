import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';

import { CoreValuesComponent } from './components/core-values/core-values.component';
import { CounterComponent } from './components/counter/counter.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponentComponent } from './components/services-component/services-component.component';
import { CareersComponent } from './components/careers/careers.component';
import { AdminLoginPanelComponent } from './components/Admin/admin-login-panel/admin-login-panel.component';
import { AdminHomeComponent } from './components/Admin/admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobsFormComponent } from './components/jobs-form/jobs-form.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { JobsAdvertComponent } from './components/jobs-advert/jobs-advert.component';
import { InternFormComponent } from './components/intern-form/intern-form.component';
import { InternAdvertComponent } from './components/intern-advert/intern-advert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    ProjectManagementComponent,
    CoreValuesComponent,
    CounterComponent,
    TeamComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponentComponent,
    CareersComponent,
    AdminLoginPanelComponent,
    AdminHomeComponent,
    JobsFormComponent,
    GalleryComponent,
    ScrollToTopComponent,
    JobsAdvertComponent,
    InternFormComponent,
    InternAdvertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
