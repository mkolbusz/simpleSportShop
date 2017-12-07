import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng4-validators';
import { AppComponent } from './app.component';
import { ClarityModule } from 'clarity-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';


import { environment } from './../environments/environment';
import { routing } from './app.routers';
import { AppSettings } from './app-settings';
import { CommonModule } from './common/common.module';
import { PublicModule } from './public/public.module';
import { CategoriesComponent } from './public/components/categories/categories.component';
import { CartWidgetComponent } from './public/components/cart-widget/cart-widget.component';
import { AuthService } from './admin/services/auth.service';



const socketConfig: SocketIoConfig = { url: AppSettings.API_URL, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CartWidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ClarityModule.forRoot(),
    AdminModule,
    PublicModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    SocketIoModule.forRoot(socketConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

