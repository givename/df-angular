import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ui-test-testspace',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styleUrl: './testspace.component.css',
})
export class TestspaceComponent {}
