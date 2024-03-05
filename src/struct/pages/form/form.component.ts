import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormFormat } from '../../../types/form';

import {
  ButtonComponent,
  ContainerComponent,
  HeaderComponent,
  InputComponent,
} from '../../ui';
import { TestspaceComponent } from '../../ui-test';

import { FormatRenderComponent } from '../../parts';

@Component({
  selector: 'app-page-form',
  standalone: true,
  imports: [
    CommonModule,
    FormatRenderComponent,
    TestspaceComponent,
    ButtonComponent,
    ContainerComponent,
    HeaderComponent,
    InputComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPageComponent {
  form: FormFormat = {
    format: [
      {
        id: '1',
        type: 'header',
        props: {
          title: 'This is Custom Form',
        },
      },
      {
        id: '10',
        type: 'button',
        props: {
          msgclick: 'This a custom button',
        },
      },
      {
        id: '22',
        type: 'input',
        props: {
          label: 'Auto input',
        },
      },
      {
        id: '33',
        type: 'input',
        props: {
          label: 'w33',
        },
      },
      {
        id: '2',
        type: 'container',
        props: {
          elements: [
            {
              id: '3',
              type: 'input',
              props: {
                label: 'Input Label',
              },
            },
            {
              id: '4',
              type: 'input',
              props: {
                label: 'Input Label',
              },
            },
            {
              id: '5',
              type: 'container',
              props: {
                title: 'Last elements',
                elements: [
                  {
                    id: '6',
                    type: 'input',
                    props: {
                      label: 'Input Label',
                    },
                  },
                  {
                    id: '7',
                    type: 'button',
                    props: {
                      msgclick: 'Click Me',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  };

  operatingSystems = [
    { id: 'win', name: 'Windows', index: 1 },
    { id: 'osx', name: 'MacOS', index: 4 },
    { id: 'linux', name: 'Linux', index: 6 },
  ];

  visibleDebugNoStorybook = false;
  visibleDebugAngularFeature = false;

  onClickVisibleDebugSwitch() {
    this.visibleDebugNoStorybook = !this.visibleDebugNoStorybook;
  }

  onClickVisibleDebugAngularFeature() {
    this.visibleDebugAngularFeature = !this.visibleDebugAngularFeature;
  }

  onClickTestComponentButton() {
    alert('Hello Test components');
  }
}
