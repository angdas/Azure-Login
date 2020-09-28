import { Component } from '@angular/core';
import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private msAdal: MSAdal) {}

  login() {
    console.log('login');
    const authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.windows.net/common');

    

    authContext.acquireTokenAsync('https://graph.windows.net', 
    '0f0bde74-df18-492e-a56d-8409d9aefaab', 'https://myapp.com', 
    '', '','')
    .then((authResponse: AuthenticationResult) => {
      console.log('Token is' , authResponse.accessToken);
      console.log('Token will expire on', authResponse.expiresOn);
    })
    .catch((e: any) => console.log('Authentication failed', e));
  }

}
