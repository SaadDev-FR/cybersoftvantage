import { AdminAuthService } from './../../../shared/adminAuthService/admin-auth.service';
import { AdminServiceService } from './../../../shared/adminService/admin-service.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardGuard implements CanActivate {
  isAuthenticated: boolean = false;
  constructor(private adminAuth: AdminAuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthenticated = this.adminAuth.getToken();
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['admin-login-panel']);
      return false;
    }
  }
}
