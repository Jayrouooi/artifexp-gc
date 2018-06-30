const _isEmpty = require('lodash/isEmpty');
const _isArray = require('lodash/isArray');
const _isObject = require('lodash/isObject');
const _forEach = require('lodash/forEach');
const _escape = require('lodash/escape');
const _endsWith = require('lodash/endsWith');
const _isNaN = require('lodash/isNaN');
const _isUndefined = require('lodash/isUndefined');
const _isInteger = require('lodash/isInteger');

const dataH = require('./data');

// validate function
module.exports.validate = function( value, type ) {
	var returnData = false;

	switch( type ) {
		case 'alphanumeric': returnData = ( value && isAlphanumeric(value) ? value : false ); break;
		case 'numeric': returnData = ( value && isNumeric(value) ? value : false ); break;
		case 'integer': returnData = ( value && isInteger(value) ? value : false ); break;
		case 'timestamp': returnData = ( value && isTimeStamp(value) ? value : false ); break;
		case 'email': returnData = ( value && validateEmail(value) ? value : false ); break;
		case 'ic': returnData = ( value && validateICNumber(value) ? value : false ); break;
		case 'phone': returnData = ( value && isPhoneNumber(value) ? value : false ); break;
		case 'escape': returnData = ( value ? _escape( value ) : '' ); break;
		case 'string_id': returnData = ( value && isStringID(value) ? value : false ); break;
		case 'numeric_id': returnData = ( value && isNumericID(value) ? value : false ); break;
		case 'token': returnData = ( value && isToken(value) ? value : false ); break;
		case 'key': returnData = ( value && isKey(value) ? value : false ); break;
		case 'company_id': returnData = ( value && isCompanyID(value) ? value : false ); break;
		case 'safe': returnData = ( value && isStringSafe(value,false) ? value : false ); break;
		case 'safe_escape': returnData = ( value ? safeEscape(value) : false ); break;
		case 'is_nan': returnData = ( value && isNan(value,false) ? value : false ); break;
	}

	return returnData;
}

// validate whether input value is email
var validateEmail = function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
module.exports.validateEmail = validateEmail;

/* Validate if email is DC user */
module.exports.validateDCUser = function(email) {
	//*incomplete - remove smashingadvantage
	return ( validateEmail(email) && ( _endsWith( email ,'@dreamcatcher.asia' ) || _endsWith( email ,'@dreamcatcher.com.my' ) || _endsWith( email ,'@smashingadvantage.com' ) ) ? true : false );
}

// validate whether input value is IC number
var validateICNumber = function(number) {
	var re = /^\d{6}-\d{2}-\d{4}$/;
	return re.test(number);
}
module.exports.validateICNumber = validateICNumber;

// check whether string provided is valid phone number
var isPhoneNumber = function(string) {
	var re = /^\+?([0-9 -]+)$/;
	return re.test(string);
}
module.exports.isPhoneNumber = isPhoneNumber;

// check whether string provided is valid string id
var isStringID = function(string) {
	var re = /^([a-zA-Z0-9_-]+)$/;
	return re.test(string);
}
module.exports.isStringID = isStringID;

// check whether string provided is valid token
var isToken = function(string) {
	var re = /^([a-zA-Z0-9._-]+)$/;
	return re.test(string);
}
module.exports.isToken = isToken;

// check whether string provided is alphanumeric
var isAlphanumeric = function(string) {
	var re = /^([a-zA-Z0-9]+)$/;
	return re.test(string);
}
module.exports.isAlphanumeric = isAlphanumeric;

// check whether string provided is numeric
var isNumeric = function(string) {
	var re = /^([0-9]+)$/;
	return re.test(string);
}
module.exports.isNumeric = isNumeric;

// check whether string provided is integer
var isInteger = function(string) {
	var re = /^([0-9-]+)$/;
	return re.test(string);
}
module.exports.isInteger = isInteger;

// check whether value provided is integer
var isValueInteger = function(value) {
	return ( !_isUndefined( value ) && _isInteger( value ) ? true : false );
}
module.exports.isValueInteger = isValueInteger;

// check whether string provided is valid numeric id
var isNumericID = function(string) {
	var re = /^([0-9-]+)$/;
	return re.test(string);
}
module.exports.isNumericID = isNumericID;

// check whether string provided is valid key
var isKey = function(string) {
	var re = /^([a-zA-Z0-9-_]+)$/;
	return re.test(string);
}
module.exports.isKey = isKey;

// check whether value provided is timestamp
var isTimeStamp = function(value) {
	var time = ( new Date(value) ).getTime();
	return ( time > 0 ? time : false );
};
module.exports.isTimeStamp = isTimeStamp;

var isCompanyID = function(string) {
	return ( string.length == 3 ? true : false );
}
module.exports.isCompanyID = isCompanyID;

// make sure it's a set of object ID 
module.exports.isObjectIDSet = function( ids ) {

	var newSet = [];

	if ( ids && !_isEmpty( ids ) ) {
		_forEach( ids, function(oid) {
			if ( isAlphanumeric(oid) )
				newSet.push(oid);
		});
	}

	return newSet;
}

// is array exists
module.exports.isArrayExists = function(array) {
	return ( array && !_isEmpty( array ) && _isArray( array ) ? true : false );
}

// is object exists
module.exports.isObjectExists = function(object) {
	return ( object && !_isEmpty( object ) && _isObject( object ) ? true : false );
}

var isNan = function(number) {
	return _isNaN(number);
}
module.exports.isNan = isNan;

// check if string provided is safe
var isStringSafe = function(string,custom) {
	var valid = true;

	if ( custom && !_isEmpty( custom ) ) {

		for (var i = 0; i < custom.length; i++) {
			if ( custom[i] && string.indexOf(custom[i]) > -1 )
				valid = false;
		};

	} else {

		if ( string.indexOf('>') > -1 )
			valid = false;

		if ( string.indexOf('"') > -1 )
			valid = false;

		if ( string.indexOf("'") > -1 )
			valid = false;

	}

	return valid;
}
module.exports.isStringSafe = isStringSafe;

// filter out unsafe string
var safeEscape = function(string) {
	var returnData = string;

	if ( string.indexOf('>') > -1 )
		returnData = dataH.replaceAll( returnData, '>', '' );

	if ( string.indexOf('"') > -1 )
		returnData = dataH.replaceAll( returnData, '"', '' );

	// if ( string.indexOf("'") > -1 )
	// 	returnData = dataH.replaceAll( returnData, "'", '' );

	return returnData;
}
module.exports.safeEscape = safeEscape;