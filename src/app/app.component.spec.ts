import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PasswordService} from "./password.service";
import {FormsModule} from "@angular/forms";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule],
    declarations: [AppComponent],
    providers: [PasswordService],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
