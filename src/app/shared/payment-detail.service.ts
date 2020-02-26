import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  // formData: PaymentDetail = {
  //   CVV: null,
  //   CardNumber: null,
  //   CardOwnerName: null,
  //   ExpirationDate: null,
  //   PMId: null
  // };
  readonly rootURL = 'http://localhost:52367/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail) {
    const headers = { 'Content-Type': 'application/json' }
    return this.http.post(this.rootURL + '/PaymentDetail', formData, { headers });
  }

  refreshList() {
    this.http.get(this.rootURL + '/PaymentDetail')
      .toPromise()
      .then(res => this.list = res as PaymentDetail[])
      .catch(err => console.log(err));
  }


}
