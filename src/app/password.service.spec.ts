import {TestBed} from '@angular/core/testing';

import {PasswordService} from './password.service';
import {PasswordStrength} from "./passwordStrength";

describe('PasswordService', () => {
  let service: PasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordService],
    });
    service = TestBed.inject(PasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return undefined for empty password', () => {
    expect(service.assessPasswordStrength("")).toBeUndefined();
  });

  it('should return undefined for short password', () => {
    expect(service.assessPasswordStrength("1234567")).toBeUndefined();
  });

  it('should return weak for letters only', () => {
    expect(service.assessPasswordStrength("abcdefgh")).toBe(PasswordStrength.Weak);
  });

  it('should return weak for numbers only', () => {
    expect(service.assessPasswordStrength("12345678")).toBe(PasswordStrength.Weak);
  });

  it('should return weak for symbols only', () => {
    expect(service.assessPasswordStrength("!@#$%^&*")).toBe(PasswordStrength.Weak);
  });

  it('should return medium for letters and numbers', () => {
    expect(service.assessPasswordStrength("abc12345")).toBe(PasswordStrength.Medium);
  });

  it('should return medium for letters and symbols', () => {
    expect(service.assessPasswordStrength("abc!@#$%")).toBe(PasswordStrength.Medium);
  });

  it('should return medium for numbers and symbols', () => {
    expect(service.assessPasswordStrength("123!@#$%")).toBe(PasswordStrength.Medium);
  });

  it('should return strong for letters, numbers, and symbols', () => {
    expect(service.assessPasswordStrength("abc123!@#")).toBe(PasswordStrength.Strong);
  });
});
