import { Routes } from '@angular/router';
import { NationListComponent } from './nation-list/nation-list.component';
import { NationEditComponent } from './nation-edit/nation-edit.component';

export const NATION_ROUTES: Routes = [
  {
    path: 'nation',
    component: NationListComponent
  },
  {
    path: 'nation/:id',
    component: NationEditComponent
  }
]
