import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AppsComponent } from './apps/apps.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AppDetailsComponent } from './app-details/app-details.component';

const routes: Routes = [
  { path: '', component: UnderConstructionComponent, data: { title: 'Chris Boucher - Scala Developer' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home - Chris Boucher' }  },
  { path: 'about', component: AboutComponent, data: { title: 'About - Chris Boucher' }  },
  { path: 'blog', component: BlogComponent, data: { title: 'Blog - Chris Boucher' }  },
  { path: 'apps', component: AppsComponent, data: { title: 'Apps - Chris Boucher' }  },
  { path: 'apps/:name', component: AppDetailsComponent, data: { title: 'App Details - Chris Boucher' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
