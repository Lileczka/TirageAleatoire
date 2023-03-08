import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page1Component } from './pages/page1/page1.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentService } from './student.service';



@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    Page1Component,
    HeaderComponent,
    FooterComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [ StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
