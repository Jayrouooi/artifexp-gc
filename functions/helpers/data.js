const _replace = require("lodash/replace");
const _isEmpty      = require('lodash/isEmpty');
const _forEach = require('lodash/forEach');
const _split = require('lodash/split');

const vH = require('./validation');

// replace all keywords on a given string
const replaceAll = function( string, search, replacement ) {
    return string.replace(new RegExp(search, 'g'), replacement);
};
module.exports.replaceAll = replaceAll;

// Turn number into money format
module.exports.formatMoney = function( number, n, x ) {
	if ( number ) {
		var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    	return number.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
	} else {
		return 0;
	}
}

module.exports.convertSlash = function(string) {
	var newString = string;

	for (var i = 1; i < 100; i++) {
		if ( newString.indexOf("/") >= 0 ) {
			newString = _replace( newString, '/', '%2F' );
		} else {
			i += 100;
		}
	};

	return newString;
}

module.exports.generateRandomID = function(length) {

	var id = '',
		possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";

	for (var i = 1; i <= length; i++) {
		id += possible.charAt(Math.floor(Math.random() * possible.length));
	};

	return id;
}

var convertLineBreak = function(string,type) {
	var newString = '';

	if ( !_isEmpty( string ) ) {
		
		if ( type == 'html' ) {
			var data = _split( string , /(?:\r\n|\r|\n)/g );
		} else {
			var data = string.split('<br />');
		}

        if ( vH.isArrayExists( data ) ) {
            var count = 1;
            _forEach(data,function(line) {
            	newString += ( count > 1 ? ( type == 'html' ? '<br />' : '\n' ) : '' ) + line;
            	count++;
            });
        }

	} // end - string

	return ( !_isEmpty( newString ) ? newString : string );
}
module.exports.convertLineBreak = convertLineBreak;