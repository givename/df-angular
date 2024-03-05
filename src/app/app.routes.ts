import { Routes } from '@angular/router';

import { HomePageComponent } from '../struct/pages/home/home/home.component';
import { FormPageComponent } from '../struct/pages/form/form.component';
import { ReactiveFormPageComponent } from '../struct/pages/reactive-form/reactive-form.component';
import { TemplateDrivenPageComponent } from '../struct/pages/template-driven/template-driven.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'form',
    component: FormPageComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormPageComponent,
  },
  {
    path: 'template-driven',
    component: TemplateDrivenPageComponent,
  },
];
