import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private toastr: ToastrService) {}
  calcualte = 0;
  perp = 0;

  getValue(value: any) {
    const result = Number(value * 3) / 4;
    if (Number.isNaN(result)) {
      Swal.fire('กรอกข้อมูล', 'คุณกรอกข้อมูลไม่ถูกต้อง กรุณากรอกตัวเลขเท่านั้น !!', 'error');
      this.calcualte;
    } else {
      Swal.fire('เรียบร้อย', 'คำนวนเรียบร้อย ขอให้มีความสุขครับ :)', 'success');
      this.calcualte = result;
      this.perp = result / 3;
    }
  }
}
