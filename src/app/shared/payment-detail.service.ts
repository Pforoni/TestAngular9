import {PaymentDetail} from './payment-detail.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail = {
    CVV: null,
    CardNumber: null,
    CardOwnerName: null,
    ExpirationDate: null,
    PMId: null
  }

  constructor() { }
}
