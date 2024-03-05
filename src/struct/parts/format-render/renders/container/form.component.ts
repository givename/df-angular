import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
} from '@angular/core';

import { FormFormatProps } from '../../../../../types/form';

import { ContainerComponent } from '../../../../ui/container/container.component';

import { FormatRenderComponent } from '../../format-render.component';

@Component({
  selector: 'form-container',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    forwardRef(() => FormatRenderComponent),
  ],
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormContainerComponent {
  @Input() id!: string;
  @Input() props!: any;

  get typedProps() {
    return this.props as FormFormatProps['container'];
  }
}
