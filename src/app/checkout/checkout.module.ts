import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutComponent } from './checkout.component';

@NgModule({
    declarations: [CheckoutComponent],
    exports: [CheckoutComponent],
    imports: [CommonModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CustomModule { }
