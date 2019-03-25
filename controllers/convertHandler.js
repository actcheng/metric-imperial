/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {
  var units = {
    'gal': ['gallons',    3.78541, 'L'],
    'L'  : ['litres',     1/3.78541, 'gal'],
    'lbs': ['pounds',     0.453592, 'kg'],
    'kg' : ['kilograms',  1/0.453592, 'lbs'],
    'mi' : ['miles',      1.60934,  'km'],
    'km' : ['kilometres', 1/1.60934, 'mi']
  }

  this.getNum = function(input) {
    var result = input.split(/[A-Za-z]/)[0];

    if ((/[A-Za-z]/).test(result[0])){
      result = 1
    } else if ((/\//).test(result)){
      if (result.split('/').length > 2) {
        result = null;
        return result
      }
      a = parseFloat(result.split('/')[0])
      b =  parseFloat(result.split('/')[1])

      if (b > 0) {
        result = a / b;
      } else {
        result = null;
      }
    } else if ( isNaN(result) ) {
      result = null
    } else {
      result = parseFloat(result)
    }

    return result;
  };

  this.getUnit = function(input) {

    var result = input.split(/([A-Za-z]+)/);
    var unit = result[1].toLowerCase();
    if (unit==='l') {
      unit = 'L'
    }

    if (result.length > 3 |
        Object.keys(units).indexOf(unit) < 0 ) {
      result = null;
    } else {
      result = result[1];
    }
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    if (initUnit) {
      var unit = initUnit.toLowerCase();
      if (unit==='l') {
        unit = 'L'
      }
      var result = units[unit][2];
    } else {
      var result = null;
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    if (unit) {
      if (unit.toLowerCase()==='l') {
        unit = 'L'
      } else {
        unit = unit.toLowerCase()
      }
      var result = units[unit][0];
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    // const galToL = 3.78541;
    // const lbsToKg = 0.453592;
    // const miToKm = 1.60934;
    if (initUnit){
    var unit = initUnit.toLowerCase()
      if (unit=='l') {
        unit = 'L'
      }
      var result = initNum * units[unit][1];
    } else {
      var result = null
    }
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = Math.round(initNum*1e5)/1e5 + ' ' +
    this.spellOutUnit(initUnit) +
    ' converts to ' +
    Math.round(returnNum*1e5)/1e5 + ' ' +
    this.spellOutUnit(returnUnit)
    ;

    return result;
  };

}

module.exports = ConvertHandler;
