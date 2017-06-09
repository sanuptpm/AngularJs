import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Register }    from './register';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
  constructor(
    private router: Router) { }

  model = new Register('', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  useroDetail(): void {
    console.log(this.model);
    this.router.navigate(['/user', this.model]);
    
  }
}
