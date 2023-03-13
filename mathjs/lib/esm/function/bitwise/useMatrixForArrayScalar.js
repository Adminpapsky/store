import { factory } from '../../utils/factory.js';
export var createUseMatrixForArrayScalar = /* #__PURE__ */factory('useMatrixForArrayScalar', ['typed', 'matrix'], _ref => {
  var {
    typed,
    matrix
  } = _ref;
  return {
    'Array, number': typed.referTo('DenseMatrix, number', selfDn => (x, y) => selfDn(matrix(x), y).valueOf()),
    'Array, BigNumber': typed.referTo('DenseMatrix, BigNumber', selfDB => (x, y) => selfDB(matrix(x), y).valueOf()),
    'number, Array': typed.referTo('number, DenseMatrix', selfnD => (x, y) => selfnD(x, matrix(y)).valueOf()),
    'BigNumber, Array': typed.referTo('BigNumber, DenseMatrix', selfBD => (x, y) => selfBD(x, matrix(y)).valueOf())
  };
});