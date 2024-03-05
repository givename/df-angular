import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FormFormatProps } from '../../../../../types/form';

import { HeaderComponent } from '../../../../ui/header/header.component';

@Component({
  selector: 'form-header',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormHeaderComponent {
  @Input() id!: string;
  @Input() props!: any;

  get typedProps() {
    return this.props as FormFormatProps['header'];
  }
}
