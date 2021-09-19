// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
 // baseUrl: 'http://192.168.1.87:8888/api/',
  baseUrl: 'http://182.72.246.251:8888/api/' ,
	storageKey: 'TaraAdmin',
	dateFormatWithTime: 'MM-DD-YYYY hh:mm A',
	dateFormat: 'MM-DD-YYYY',
	resetPasswordLink: 'http://localhost:4200/resetpassword',
	// homeURL: 'http://192.168.1.87:8888/',
	homeURL:'http://182.72.246.251:8888/',
	googleMapKey: 'AIzaSyC7Ju90BCi9a01akYUWBvrEOFzwl8yxWZ8',
	

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
