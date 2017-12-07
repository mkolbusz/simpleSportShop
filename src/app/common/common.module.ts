import { NgModule } from '@angular/core';

import { RequestOptions, Http } from '@angular/http';
import { AuthHttpProvider } from './helpers/custom-http';
import { AuthService } from '../admin/services/auth.service';


@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [AuthHttpProvider, AuthService]
})
export class CommonModule { }
