import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  users: User[] = [];


constructor(private userService: UserService) {}


ngOnInit(): void {
this.loadUsers();
}


loadUsers(): void {
this.userService.getAll().subscribe(data => this.users = data);
}


deleteUser(id: number): void {
if (confirm('Delete user?')) {
this.userService.delete(id).subscribe(() => this.loadUsers());
}
}

}
