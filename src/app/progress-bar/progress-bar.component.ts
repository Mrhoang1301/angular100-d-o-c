import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
    <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
        background-color:red;
        color: #000;
      }

      .progress-bar-container {
        width: 100%;

      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit,OnChanges {
  @Input()
  backgroundColor!: string;
  @Input()
  progressColor!: string;
  @Input() progress = 0;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if ("progress" in changes) {
      if (typeof changes["progress"].currentValue !== "number") {
        const progress = Number(changes["progress"].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }
  ngOnInit() {}
}
