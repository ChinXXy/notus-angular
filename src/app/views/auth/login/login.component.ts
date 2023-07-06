import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { TokenStorageService } from "src/app/services/token-storage.service";
import { Session, element } from "protractor";
import { LoginMDL } from "src/app/Models/login-mdl";
import { Router } from "@angular/router";

const companyDB = "KEFALOS_NEW";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  error: any[] = [];
  userInfo: LoginMDL[] = [];
  form: any = {
    username: null,
    password: null,
  };
  public isLoggedIn = false;
  isLoginFailed = false;
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
    ) { }


  onSubmit(): void {
    console.log("tugd");
    localStorage.clear();
    const { username, password } = this.form;
    this.authService.login(username, password, companyDB).subscribe(
      (data) => {
        this.userInfo = JSON.parse(data.success);
        console.log(data.error);

        console.log(data);

        for (let x = 0; x < 1; x++) {
          if (data.success !== null) {
            this.userInfo[x] = JSON.parse(data.success);
          }
          if (data.error !== null) {
            // swal("Error", data.error, "error");
          }
          localStorage.setItem("Session", this.userInfo[x].Session);
          // swal("User Logged In", "Welcome", "success");
        }

        this.router.navigateByUrl('/dashboard');      },
      
    );
  }
  ngOnInit(): void { }

}
