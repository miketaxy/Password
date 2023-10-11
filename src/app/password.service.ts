import {Injectable} from "@angular/core";
import {PasswordStrength} from "./passwordStrength";

@Injectable()
export class PasswordService {
  assessPasswordStrength(password: string): PasswordStrength | undefined {
    const isValid = password.length >= 8;
    const hasLetters = /[a-z]/i.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-z0-9]/i.test(password);

    if (!isValid) {
      return undefined;
    }
    if (hasLetters && hasNumbers && hasSymbols) {
      return PasswordStrength.Strong;
    }
    if (hasLetters && hasNumbers || hasNumbers && hasSymbols || hasLetters && hasSymbols) {
      return PasswordStrength.Medium;
    }
    return PasswordStrength.Weak;
  }
}
