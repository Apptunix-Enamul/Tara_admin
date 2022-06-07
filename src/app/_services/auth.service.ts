import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { urls } from './urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	onLogin: Subject<any> = new Subject();
	onProfileUpdate : Subject<any> = new Subject();
	constructor(private _http : HttpClient) { }
	
	login(formData: any) {
		return this._http.post<any>(`${environment.baseUrl}admin/login/`, formData)
			.pipe(map((data : any) => {
				
				if (data) {
					this.onLogin.next(data.data);
					localStorage.setItem(environment.storageKey, JSON.stringify(data.data));
				}
				return data;
			}));
	}

	isLoggedIn() {
		return (localStorage.getItem(environment.storageKey) != null) ? true : false;
	}

	signup(formData) {
		return this._http.post<any>(`${environment.baseUrl}auth/vendor/sign-up/`, formData)
			.pipe(map((data : any) => {	
				return data;
			}));
	}

	forgot(formData) {
		return this._http.post<any>(`${environment.baseUrl}admin/send-otp/`, formData)
			.pipe(map((data : any) => {	
				return data;
			}));
	}
	postApi(url,data)
	{
	  return this._http.post(`${environment.baseUrl}`+url,data);
	}
	putApi(url,data)
	{
	  return this._http.put(`${environment.baseUrl}`+url,data);
	}
	getApi(url)
    {
      return this._http.get(`${environment.baseUrl}`+url);
    }
	getProfileInfo() {
		return this._http.get<any>(`${environment.baseUrl}admin/profile`)
			.pipe(map((data : any) => {	
				return data;
			}));
	}

	updateProfile(formData) {
		return this._http.put<any>(`${environment.baseUrl}admin/profile`, formData)
			.pipe(map((data : any) => {	
				if(data) {
					this.onProfileUpdate.next(data.data);
				}
				return data;
			}));
	}

	changePassword(formData) {
		return this._http.put<any>(`${environment.baseUrl}admin/changePassword`, formData)
			.pipe(map((data : any) => {	
				if(data) {
					this.onProfileUpdate.next(data.data);
				}
				return data;
			}));
	}

	resetPassword(formData, token) {
		return this._http.post<any>(`${environment.baseUrl}admin/resetPassword/${token}`, formData)
			.pipe(map((data : any) => {	
				if(data) {
					this.onProfileUpdate.next(data.data);
				}
				return data;
			}));
	}

}
