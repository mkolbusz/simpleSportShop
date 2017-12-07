import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService as SocialAuthService } from 'ng4-social-login';
import { GoogleLoginProvider } from 'ng4-social-login';
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

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      this.authService.loginWithGoogle(user).subscribe(
        res => {
          this.router.navigate([this.returnUrl]);
        },
        err => {
          this.loading = false;
          this.notifyService.error('Logowanie', 'Błąb podczas logowania. Sprawdź swoje dane.');
        }
      );
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
