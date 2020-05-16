import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './index/home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './index/blog/blog.component';
import { ContactComponent } from './index/contact/contact.component';
import { PagesComponent } from './index/pages/pages.component';
import { ShopComponent } from './index/shop/shop.component';
import { CategoryComponent } from './index/shop/category/category.component';
import { DetailsComponent } from './index/shop/details/details.component';
import { CheckoutComponent } from './index/shop/checkout/checkout.component';
import { CartComponent } from './index/shop/cart/cart.component';
import { BlogsComponent } from './index/blog/blogs/blogs.component';
import { BlogdetailsComponent } from './index/blog/blogdetails/blogdetails.component';
import { ElementsComponent } from './index/pages/elements/elements.component';
import { TrackingComponent } from './index/pages/tracking/tracking.component';
import { NewsblogsComponent } from './index/blog/newsblogs/newsblogs.component';
import { SportComponent } from './index/blog/sport/sport.component';
import { EntertainmentComponent } from './index/blog/entertainment/entertainment.component';
import { ScienceComponent } from './index/blog/science/science.component';
import { TechnologyComponent } from './index/blog/technology/technology.component';
import { HealthComponent } from './index/blog/health/health.component';


const routes: Routes = [
  { path:'', component:IndexComponent,
    children:[
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path:'home', component:HomeComponent},
      { path:'blog', component:BlogComponent},
      { path: 'blogs', component:BlogsComponent},
      { path:'blogdetails', component:BlogdetailsComponent},
      { path:'newsblogs', component:NewsblogsComponent},
      { path:'technology', component:TechnologyComponent},
      { path:'health', component:HealthComponent},
      { path:'science', component:ScienceComponent},
      { path:'sport', component:SportComponent},
      { path:'entertainment', component:EntertainmentComponent},

      { path:'contact', component:ContactComponent},
      { path:'pages', component:PagesComponent},
      { path:'elements', component:ElementsComponent},
      { path:'tracking', component:TrackingComponent},  
      { path:'shop', component:ShopComponent},
      { path:'category', component:CategoryComponent},
      { path:'cart', component:CartComponent},
      { path:'checkout', component:CheckoutComponent},
      { path:'details', component:DetailsComponent},
    ]},
    { path:'login', component:LoginComponent},
    { path:'admin', component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
