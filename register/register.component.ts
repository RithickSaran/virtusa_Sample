import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import {Register} from '../register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 hide=true;
 
register: Register = new Register();
constructor(private registerService: RegisterService,
  private router: Router) { }

ngOnInit(): void {
}

saveRegister(){
  this.registerService.createRegister(this.register).subscribe( data =>{
    console.log(data);
    // this.goToEmployeeList();
  },
  error => console.log(error));
}

// goToEmployeeList(){
//   this.router.navigate(['/employees']);
// }

onSubmit(){
  console.log(this.register);
  this.saveRegister();
}
}