import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {LoginComponent} from './login/login.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {EmployeeService} from './employee.service';
import {DepartmentService} from './department.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EmployeeOverviewComponent} from './employee-overview/employee-overview.component';
import {EmployeeContactComponent} from './employee-contact/employee-contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AgmCoreModule} from '@agm/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';

import {Constants} from './constants';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    routingComponents,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    EmployeeOverviewComponent,
    EmployeeContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    AgmCoreModule.forRoot({apiKey: Constants.apiKey})
  ],
  providers: [EmployeeService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
