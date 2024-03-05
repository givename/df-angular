import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-template-driven',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateDrivenPageComponent {
  @ViewChild(NgForm) form!: NgForm | void;

  username = '';
  password = '';

  onSubmit() {
    console.log({
      username: this.username,
      password: this.password,
    });
  }
}
