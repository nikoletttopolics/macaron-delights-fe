import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  selectCheckoutForm,
  selectedCartItems,
} from '../../state/app.selectors';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncPipe } from '@angular/common';
import { addToCart, removeFromCart, updateForm } from '../../state/app.actions';
import { CheckoutForm } from '../../app.models';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialogComponent } from '../../components/checkout-dialog/checkout-dialog.component';

@Component({
  selector: 'app-cart-container',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cart-container.component.html',
  styleUrl: './cart-container.component.scss',
})
export class CartContainerComponent implements OnInit {
  store = inject(Store);
  dialog = inject(MatDialog);

  cartItems$ = this.store.select(selectedCartItems);

  checkoutForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
    ]),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9+]*'),
    ]),
    emailAddress: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.checkoutForm.valueChanges.subscribe((checkoutFormValue) => {
      this.store.dispatch(
        updateForm({ checkoutForm: checkoutFormValue as CheckoutForm })
      );
    });

    this.store
      .select(selectCheckoutForm)
      .pipe(take(1))
      .subscribe((checkoutForm) => {
        this.checkoutForm.patchValue(checkoutForm);
      });
  }

  removeFromCart(id: number): void {
    this.store.dispatch(removeFromCart({ id: id }));
  }

  addToCart(id: number): void {
    this.store.dispatch(addToCart({ id: id }));
  }

  onCheckout(): void {
    this.dialog.open(CheckoutDialogComponent, {
      width: '900px',
      maxHeight: '450px',
      maxWidth: '450px',
    });
  }
}
