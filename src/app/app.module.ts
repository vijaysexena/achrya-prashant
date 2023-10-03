import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './course/course.component';
import { FaqComponent } from './faq/faq.component';
import { DecimalToTimePipe } from './pipe/decimal-to-time.pipe';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CourseComponent,
    FaqComponent,
    DecimalToTimePipe,
    SideNavComponent,
    AdBannerComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
