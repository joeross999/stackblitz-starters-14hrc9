import '@angular/localize/init';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { KENDO_DROPDOWNLIST } from '@progress/kendo-angular-dropdowns';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngFor="let value of values; index as i">
      <kendo-dropdownlist [data]="data" [value]="value" (valueChange)="testChange($event, i)">
      </kendo-dropdownlist>
    </ng-container>
    <div *ngFor="let value of values; index as i">
      {{ i }}: {{ value }}
    </div>
  `,
  standalone: true,
  imports: [KENDO_DROPDOWNLIST, CommonModule],
})
export class App {
  data = ['string', 'integer', 'decimal'];
  values = ['string', 'integer', 'string', 'decimal', 'string'];

  testChange(value: string, index: number): void {
    // const v = this.values.slice();
    // v[index] = value;
    // this.values = v;
    this.values[index] = value;
  }
}

bootstrapApplication(App, {
  providers: [
    provideAnimations(), // Use provideAnimations() instead of BrowserAnimationsModule
  ],
});
