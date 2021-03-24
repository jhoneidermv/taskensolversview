import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task/task.service';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { EdittaskComponent } from './edittask/edittask.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', component: TaskComponent},
  {path: 'home', component: WelcomeComponent},
  {path: 'edittask', component: EdittaskComponent},
  {path: 'edittask/:id', component: EdittaskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskComponent,
    WelcomeComponent,
    FormComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
