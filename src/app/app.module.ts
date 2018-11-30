import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JwtModule} from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {ErrorInterceptorProvider} from "./_services/error.interceptor";
import {AlertifyService} from "./_services/alertify.service";
import {BsDropdownModule, TabsModule} from "ngx-bootstrap";
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {AuthGuard} from "./_guards/auth.guard";
import {UserService} from "./_services/user.service";
import {MemberListComponent} from "./members/member-list/member-list.component";
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import {MemberDetailResolver} from "./_resolvers/member-detail.resolver";
import {MemberListResolver} from "./_resolvers/member-list.resolver";

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ListsComponent,
    MemberListComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    TabsModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
