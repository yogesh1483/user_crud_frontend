import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Address } from '../../models/address.model';
import { User } from '../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm implements OnInit {
  isEdit = false;


user: User = new User(
  null,    // userId null
  '',      // name
  '',      // email
  0,       // contact
  true,    // activeStatus
  new Address(null, '', '', '', '', '') // addressId null
);


constructor(
private service: UserService,
private route: ActivatedRoute,
private router: Router
) {}


ngOnInit(): void {
const id = this.route.snapshot.paramMap.get('id');
if (id) {
this.isEdit = true;
this.service.getById(+id).subscribe(data => this.user = data);
}
}


save(): void {
if (this.isEdit && this.user.userId) {
this.service.update(this.user.userId, this.user)
.subscribe(() => this.router.navigate(['/users']));
} else {
this.service.create(this.user)
.subscribe(() => this.router.navigate(['/users']));
}
}
cancel(): void {
this.router.navigate(['/users']);
}

}
