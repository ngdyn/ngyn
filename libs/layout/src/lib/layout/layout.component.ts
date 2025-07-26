import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgynConfig } from '@ngyn/config';

@Component({
  selector: 'ngyn-layout',
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgynLayoutComponent {
  @Input({ required: true }) config!: NgynConfig;
}
