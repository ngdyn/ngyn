import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngyn-core',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {}
