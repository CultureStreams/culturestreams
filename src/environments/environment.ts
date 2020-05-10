// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // server: "https://api.culturestreams.org/api/v0/",
  // apiv1: "https://api.culturestreams.org/api/v1/",
  // authorization: "Token e0b6473b126123ee38b78317d919561952c4f3e7",
  apiv1: "http://127.0.0.1:8000/api/v1/",
  server: "http://127.0.0.1:8000/api/v0/",
  authorization: "Token cb62de62c6c90e4cd812947401cb40bdb26cfa19",
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
