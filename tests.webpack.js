window.IS_REACT_ACT_ENVIRONMENT = true;

let context = require.context('./src', true, /\.test\.js$/);
context.keys().forEach(context);