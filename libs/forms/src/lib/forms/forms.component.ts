import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgynConfig } from '@ngyn/config';

@Component({
  selector: 'ngyn-forms',
  imports: [CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgynFormsComponent {
  @Input({ required: true }) config!: NgynConfig;
}
