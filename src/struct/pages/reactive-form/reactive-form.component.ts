import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-page-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormPageComponent {
  favoriteOsControl = new FormGroup({
    os: new FormControl(''),
    version: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    hardware: new FormGroup({
      cpu: new FormControl(''),
      ram: new FormControl(''),
    }),
  });

  onSubmit() {
    console.log(this.favoriteOsControl.value);
  }

  onButtonClick() {
    this.favoriteOsControl.patchValue({
      version: 30,
      hardware: {
        cpu: 'amd',
      },
    });
  }
}
