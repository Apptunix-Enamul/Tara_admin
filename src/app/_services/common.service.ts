import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { urls } from './urls';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
	SaveObj:object
	public subject = new BehaviorSubject<boolean>(false)
  profileUpdate(): Observable<any> {
    return this.subject.asObservable()
  }
	constructor(private _http: HttpClient,private spinner:NgxSpinnerService) { }

	post(url: string, postData: any = {}) {
		return this._http.post<any>(`${environment.baseUrl}${url}`,postData).pipe(map((data: any) => {
				return data;
			}));
	}

	get(url: string) {
		return this._http.get<any>(`${environment.baseUrl}${url}`)
			.pipe(map((data: any) => {
				return data;
			}));
	}

	put(url: string, putData: any = {}) {
		return this._http.put<any>(`${environment.baseUrl}${url}`, putData)
			.pipe(map((data: any) => {
				return data;
			}));
	}

	delete(url: string) {
		return this._http.delete<any>(`${environment.baseUrl}`+url)
			.pipe(map((data: any) => {
				return data;
			}));
	}

	deleteById(url: string, id: string) {
		return this._http.delete<any>(`${environment.baseUrl}${urls[url]}/${id}`)
			.pipe(map((data: any) => {
				return data;
			}));
	}
	uploadMedia(formData) {
		return this._http.post<any>(`${environment.baseUrl}upload/media/`, formData)
			.pipe(map((data: any) => {
				return data;
			}));
	}
	postApi(url, data) {
		return this._http.post(`${environment.baseUrl}` + url, data);
	  }
    putApi(url, data) {
      return this._http.put(`${environment.baseUrl}` + url, data);
      }
	  deleteApi(url) {
		return this._http.delete(`${environment.baseUrl}` + url).pipe(map((data: any) => {
			return data;
		}));
	  }
    Showspinner(){
     this.spinner.show()
	}
	permissions = {
		dashboard : 1,
		users : 2,
		walkthrough : 3,
		banks: 4,
		manage_update : 5,
		notification : 6,
		customer_support : 7,
		wallet_address : 8,
		request : 9,
		analytics : 10,
		rate_change : 11,
		refer_and_earn : 12,
		manage_sub_admin : 13
	}
	latestUserInfo;

	checkPermissionRealData(name : string, type) {
		let userInfo = this.latestUserInfo;
		let permissions = userInfo.permissions;
		let check = permissions.find(x=> x.module == this.permissions[name]);
		if(permissions.length > 0) {
			if(check != undefined && check[(type == 'view')?'is_view':'is_add_edit']){
				return true;
			} else {
				return false;
			}
		}
		return true;
 	}
	 checkPermission(name : string, type) {
		let userInfo = JSON.parse(sessionStorage.getItem(environment.storageKey));
		let permissions = userInfo?.permissions?userInfo?.permissions:[];
		if(permissions.length > 0) {
			let check = permissions.find(x=> x.module.id == this.permissions[name]);
			if(check != undefined && check[(type == 'view')?'is_view':'is_add_edit']){
				return true;
			} else {
				return false;
			}
		}
		return true;
 	}
}