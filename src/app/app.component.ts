import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 7';

  // khai bao mang cac thang.
  months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];

  showAge = true;

  myClickFunction(event : any) {
    // hiển thị thông báo
    alert("Button is clicked!");
    // hiện thị log ra console
    console.log(event);
  }

  changemonths(event : any) {
    alert('Change dropdown.');
  }

  onKeydown(event:any){
    alert('Mono');
  }

  message = "";

    onClick() {
        this.message = "Đã Click";
    }

    values = "";
    onKey(event: any) {
        this.values = event.target.value;
    }

}
