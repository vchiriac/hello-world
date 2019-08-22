import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepartmentListComponent} from './department-list/department-list.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {EmployeeOverviewComponent} from './employee-overview/employee-overview.component';
import {EmployeeContactComponent} from './employee-contact/employee-contact.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/departments',
    pathMatch: 'full'
  },
  {
    path: 'departments',
    component: DepartmentListComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
    children: [
      {path: 'overview', component: EmployeeOverviewComponent},
      {path: 'contact', component: EmployeeContactComponent}
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent];
