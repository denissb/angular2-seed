import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'ct-about',
  templateUrl: `HELLO FROM CONTACTS!!!`,
})
export class ContactsComponent {
  @Input() message: string;

}
