import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ChildComponent } from './components/child/child.component';
import { pipe } from 'rxjs';
import { PipeComponent } from './components/pipe/pipe.component';
import { FormComponent } from './components/form/form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { UserComponent } from './components/user/user.component';
import { CrudComponent } from './components/crud/crud.component';

// routing is used to navigate to different components within the single page application by adding route in browser link
export const routes: Routes = [
  { path: '', component: LoginComponent }, // default routing
  { path: 'home', component: HomeComponent }, // named routing
  { path: 'directive', component: DirectivesComponent }, // named routing
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  //   { path: 'pipe', component: PipeComponent },
  { path: 'pipe', redirectTo: 'child' }, // redirect routing
  //   {
  //     path: 'form',
  //     component: FormComponent,
  //     children: [
  //       {
  //         path: 'template',
  //         component: TemplateFormComponent,
  //       },
  //       {
  //         path: 'reactive',
  //         component: ReactiveFormComponent,
  //       },
  //     ],
  //   }, // child routing

  {
    path: 'form/:id',
    component: FormComponent,
    children: [
      {
        path: 'utdf',
        component: TemplateFormComponent,
      },
      {
        path: 'rtf',
        component: ReactiveFormComponent,
      },
    ],
  }, // parameterized routing
  { path: 'viewChild', component: ViewChildComponent },
  { path: 'user', component: UserComponent },
  { path: 'crud', component: CrudComponent },
  { path: '**', component: PagenotfoundComponent }, // wild routing
];
