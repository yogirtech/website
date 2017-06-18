import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SolutionComponent } from './solution/solution.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDevelopmentComponent } from './product-development/product-development.component';
import { MobileAutomationComponent } from './mobile-automation/mobile-automation.component';
import { SoftwareSupportComponent } from './software-support/software-support.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solution', component: SolutionComponent},
  { path: 'about-us', component: AboutComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'solution', component: SolutionComponent},
  { path: 'product-development', component: ProductDevelopmentComponent},
  { path: 'mobile-automation', component: MobileAutomationComponent},
  { path: 'software-support', component: SoftwareSupportComponent},
];

export const routing = RouterModule.forRoot(routes);
