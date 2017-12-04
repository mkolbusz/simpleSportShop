import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AuthService as SocialAuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'ng4-social-login';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  returnUrl: string;
  loading: boolean;

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationsService
  ) {
    this.loading = false;
   }

  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.authService.loginByGoogle(user);
    });
  }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe(
      res => {
        this.router.navigate([this.returnUrl]);
      },
      err => {
        this.loading = false;
        this.notifyService.error('Logowanie', 'Błąb podczas logowania. Sprawdź swoje dane.');
      }
    );
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
