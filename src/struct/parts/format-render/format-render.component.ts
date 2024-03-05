import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FormFormatElement } from '../../../types/form';

import {
  FormButtonComponent,
  FormContainerComponent,
  FormHeaderComponent,
  FormInputComponent,
} from './renders';

@Component({
  selector: 'blocks-format-render',
  standalone: true,
  imports: [
    CommonModule,
    FormHeaderComponent,
    FormButtonComponent,
    FormInputComponent,
    FormContainerComponent,
  ],
  templateUrl: './format-render.component.html',
  styleUrl: './format-render.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormatRenderComponent {
  @Input() format!: FormFormatElement[];
}
