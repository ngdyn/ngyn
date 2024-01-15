import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngyn-config',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgynConfigComponent {}
