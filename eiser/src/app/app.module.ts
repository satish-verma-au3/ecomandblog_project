import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './index/home/home.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';
import { ShopComponent } from './index/shop/shop.component';
import { BlogComponent } from './index/blog/blog.component';
import { PagesComponent } from './index/pages/pages.component';
import { ContactComponent } from './index/contact/contact.component';
import { CategoryComponent } from './index/shop/category/category.component';
import { DetailsComponent } from './index/shop/details/details.component';
import { CheckoutComponent } from './index/shop/checkout/checkout.component';
import { CartComponent } from './index/shop/cart/cart.component';
import { BlogsComponent } from './index/blog/blogs/blogs.component';
import { BlogdetailsComponent } from './index/blog/blogdetails/blogdetails.component';
import { TrackingComponent } from './index/pages/tracking/tracking.component';
import { ElementsComponent } from './index/pages/elements/elements.component';
import { NewsblogsComponent } from './index/blog/newsblogs/newsblogs.component';
import { HttpClientModule} from '@angular/common/http';
import { TechnologyComponent } from './index/blog/technology/technology.component';
import { HealthComponent } from './index/blog/health/health.component';
import { ScienceComponent } from './index/blog/science/science.component';
import { SportComponent } from './index/blog/sport/sport.component';
import { EntertainmentComponent } from './index/blog/entertainment/entertainment.component';
import { NewsblogingService } from './newsbloging.service';
  import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    BlogComponent,
    PagesComponent,
    ContactComponent,
    CategoryComponent,
    DetailsComponent,
    CheckoutComponent,
    CartComponent,
    BlogsComponent,
    BlogdetailsComponent,
    TrackingComponent,
    ElementsComponent,
    NewsblogsComponent,
    TechnologyComponent,
    HealthComponent,
    ScienceComponent,
    SportComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewsblogingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
