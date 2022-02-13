import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.authChage.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }

  onLogout(){
    this.authService.logout();
    this.onClose();
  }

  onClose() {
    this.closeSidenav.emit();
  }
}
