import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from '../_services/common.service';


@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  AdminId: any;
  
  constructor(private router: Router, private _noti : ToastrService, private _comon : CommonService) { 
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> {
      return new Promise(async (resolve) => {
        const roles = route.data;
        if(this._comon.checkPermission(roles.permission,roles.type)) {
            resolve(true);
        } else {
            resolve(false)
            this.router.navigate(['pages/profile']);
            // this._noti.show("error", "You don't have the permission to access that page.")
        }
          
      })
  }
}
