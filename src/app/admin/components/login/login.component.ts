import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AuthService as SocialAuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'ng4-social-login';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin/products';
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);

      // this.authService.login(this.email, this.password);
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password);
    console.log(this.returnUrl);
    this.router.navigate([this.returnUrl]);
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
