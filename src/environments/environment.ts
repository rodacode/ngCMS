// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
     // Initialize Firebase
  	firebaseConfig: {
    apiKey: "AIzaSyCdTmaLVNKSOsvrlu1pI7sHVdXuXiXebjA",
    authDomain: "ng4cms.firebaseapp.com",
    databaseURL: "https://ng4cms.firebaseio.com",
    projectId: "ng4cms",
    storageBucket: "ng4cms.appspot.com",
    messagingSenderId: "248448473101"

  }
};
