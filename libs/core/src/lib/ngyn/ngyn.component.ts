import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgynConfig } from '@ngyn/config';

@Component({
  selector: 'ngyn', // eslint-disable-line @angular-eslint/component-selector
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngyn.component.html',
  styleUrl: './ngyn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgynComponent {
  @Input({ required: true }) config!: NgynConfig;
}
