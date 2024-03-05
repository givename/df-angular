import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FormFormatProps } from '../../../../../types/form';

import { InputComponent } from '../../../../ui/input/input.component';

@Component({
  selector: 'form-input',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent {
  @Input() id!: string;
  @Input() props!: any;

  get typedProps() {
    return this.props as FormFormatProps['input'];
  }
}
