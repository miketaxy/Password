import {Component} from '@angular/core';
import {PasswordStrength} from "./passwordStrength";
import {PasswordService} from "./password.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = "";
  assessment: PasswordStrength | undefined = undefined;
  sections: PasswordStrength[] = Object.values(PasswordStrength).map(x => x as PasswordStrength);
  constructor(protected passwordService: PasswordService) {}
  classForSection(n: number): string {
    if(this.assessment === undefined)
      return "invalid";
    if(n <= this.sections.indexOf(this.assessment))
      return this.assessment.valueOf();
    return "";
  }
}
