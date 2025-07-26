import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgynConfig } from '@ngyn/config';

@Component({
  selector: 'ngyn-forms',
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgynFormsComponent {
  @Input({ required: true }) config!: NgynConfig;
}
