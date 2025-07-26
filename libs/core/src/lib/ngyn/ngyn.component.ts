import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgynConfig } from '@ngyn/config';

@Component({
  selector: 'ngyn', // eslint-disable-line @angular-eslint/component-selector
  imports: [],
  templateUrl: './ngyn.component.html',
  styleUrl: './ngyn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgynComponent {
  @Input({ required: true }) config!: NgynConfig;
}
