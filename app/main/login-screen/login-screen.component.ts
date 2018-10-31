import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/classes/user";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login-screen",
  templateUrl: "./login-screen.component.html",
  styleUrls: ["./login-screen.component.scss"]
})
export class LoginScreenComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  public color: string;
  public username: string;
  public password: string;
  public class: string;
  public pwVisible: boolean = false;
  public imageLink: string = "../../../assets/img/bg.jpg";
  ngOnInit() {
    this.class = "fade-in";
  }
  logIn() {
    this.authService.logIn(this.username, this.password).subscribe(response => {
      if (response["0"]) {
        this.toastr.info("Logado com sucesso!", "Parabéns!");
        response = response["0"];
        let user = {
          id: response["id"],
          member_since: response["member_since"],
          email: response["email"],
          real_name: response["real_name"],
          institution: response["institution"],
          username: response["username"],
          password: response["password"]
        };
        this.authService.setUser(user);
        this.router.navigate(["dashboard/profile"]);
      } else {
        this.toastr.error("Usuário ou senha incorretos.", "Erro.");
      }
    });
  }
}
