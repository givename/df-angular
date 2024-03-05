import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from '../../../ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
