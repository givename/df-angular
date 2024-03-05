import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FormFormatProps } from '../../../../../types/form';

import { ButtonComponent } from '../../../../ui/button/button.component';

@Component({
  selector: 'form-button',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormButtonComponent {
  @Input() id!: string;
  @Input() props!: any;

  get typedProps() {
    return this.props as FormFormatProps['button'];
  }
}
