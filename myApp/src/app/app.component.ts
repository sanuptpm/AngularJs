// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!';
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<login-form></login-form>`
  styleUrls: [ './app.component.css' ],
  template: `
     <nav>
        <a routerLink="/login">Login</a>
        <a routerLink="/register">Register</a>
     </nav>
     <router-outlet></router-outlet>
 `
})
export class AppComponent {
  title = 'My App!';
}
