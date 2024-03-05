import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'ui-container',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  @Input() title: string | void = '';
}
