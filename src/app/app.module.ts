import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { LoadingInterceptor } from './loading.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePassComponent } from './Visitor/create-pass/create-pass.component';
import { GeneratePassComponent } from './Visitor/generate-pass/generate-pass.component';

const materials = [
  MatGridListModule,
  MatButtonModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [
    AppComponent,
    CreatePassComponent,
    GeneratePassComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ...materials,
    MatSelectModule
  ],
  exports: [...materials],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
