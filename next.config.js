const withTranspiledNodeModules = require("next-transpile-modules");

// @aws-amplify/ui-react v0.2.0 doesn't transpile its ES6 code so we have to
// https://github.com/aws-amplify/amplify-js/issues/5282
const esNodeModules = ["@aws-amplify/ui-react"];

module.exports = withTranspiledNodeModules(esNodeModules)();
