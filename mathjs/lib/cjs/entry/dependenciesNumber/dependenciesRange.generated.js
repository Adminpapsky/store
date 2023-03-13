"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rangeDependencies = void 0;
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesLargerGenerated = require("./dependenciesLarger.generated.js");
var _dependenciesLargerEqGenerated = require("./dependenciesLargerEq.generated.js");
var _dependenciesSmallerGenerated = require("./dependenciesSmaller.generated.js");
var _dependenciesSmallerEqGenerated = require("./dependenciesSmallerEq.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesNumber = require("../../factoriesNumber.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var rangeDependencies = {
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  largerDependencies: _dependenciesLargerGenerated.largerDependencies,
  largerEqDependencies: _dependenciesLargerEqGenerated.largerEqDependencies,
  smallerDependencies: _dependenciesSmallerGenerated.smallerDependencies,
  smallerEqDependencies: _dependenciesSmallerEqGenerated.smallerEqDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createRange: _factoriesNumber.createRange
};
exports.rangeDependencies = rangeDependencies;