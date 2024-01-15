import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngyn', // eslint-disable-line @angular-eslint/component-selector
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngyn.component.html',
  styleUrl: './ngyn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgynComponent {}
