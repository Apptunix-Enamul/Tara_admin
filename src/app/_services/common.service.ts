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
	  Showspinner(){
     this.spinner.show()
	 setTimeout(() => {
		 this.spinner.hide()
	 }, 1000000);
	}
}