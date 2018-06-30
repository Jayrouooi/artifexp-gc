var _forEach = require('lodash/forEach');
var _isEmpty = require('lodash/isEmpty');
var _sortBy = require('lodash/sortBy');
var _last = require('lodash/last');
var _size = require('lodash/size');
var moment = require('moment');

var vH = require('./validation');

/* convert timestamp into date using moment */
const getMomentTime = function( timestamp, format , offset ) {
    var utc = ( offset ? offset : 8 );
    return ( vH.validate(timestamp,'timestamp') ? moment(timestamp).utcOffset(utc).format(format) : '' );
}

module.exports.getMomentTime = getMomentTime;

/* convert now into date using moment */
const getMomentNow = function( format , offset ) {
    var utc = ( offset ? offset : 8 );
    return moment().utcOffset(utc).format(format);
}
module.exports.getMomentNow = getMomentNow;

/* convert now into timestamp using moment */
const getMomentStamp = function( offset ) {
    var utc = ( offset ? offset : 8 );
    return moment().utcOffset(utc).valueOf();
}
module.exports.getMomentStamp = getMomentStamp;

/* set moment time */
const setMomentTime = function( timestamp, formData, offset ) {
    var utc = ( offset ? offset : 8 );
    var newTimestamp = timestamp;

    if ( formData ) {

        if ( formData.hour || formData.hour == 0 ) {
            newTimestamp = moment(newTimestamp).hour(formData.hour).valueOf();
        }

        if ( formData.minute || formData.minute == 0 ) {
            newTimestamp = moment(newTimestamp).minute(formData.minute).valueOf();
        }

        if ( formData.second || formData.second == 0 ) {
            newTimestamp = moment(newTimestamp).second(formData.second).valueOf();
        }
    }    

    return newTimestamp;
}
module.exports.setMomentTime = setMomentTime;


// print pretty date
var printPrettyDate = function(dates) {
    var sessionData = [],
        count = 1,
        label = '';
    
    if ( vH.isArrayExists( dates ) ) {
        _forEach(dates,function(date) {
            if ( date.start_date && date.end_date ) {
                for ( var i = date.start_date; i < date.end_date; i+= (86400*1000) ) {
                    sessionData.push({
                        id: count,
                        day_num: parseInt( getMomentTime( i, 'D' ), 10 ), 
                        month_num: parseInt( getMomentTime( i, 'M' ), 10 ),
                        year_num: parseInt( getMomentTime( i, 'YYYY' ), 10 ),
                        day: getMomentTime( i, 'DD' ), 
                        month: getMomentTime( i, 'MMM' ), 
                        year: getMomentTime( i, 'YY' )
                    });
                    count++;
                } // end - for
            } // end - date
        });
    }

    if ( vH.isArrayExists( sessionData ) ) {
        sessionData = _sortBy( sessionData, ['year_num','month_num','day_num'] );
        var total = _size( sessionData ),
            currentDay = 0,
            currentMonth = 0,
            currentYear = 0,
            currentMonthLabel = '',
            currentYearlabel = '',
            endLine = '',
            lastSession = _last( sessionData );

        _forEach( sessionData, function(session) {
            if ( session.id == 1 || session.id == '1' ) {
                currentDay = session.day_num;
                currentMonth = session.month_num;
                currentMonthLabel = session.month;
                currentYear = session.year_num;
                currentYearlabel = session.year;
                label = session.day + ( total == 1 ? ' ' + session.month : '' );
                currentDay++;
            } else {

                // if it's the same month
                if ( currentMonth == session.month_num ) {

                    // if it's progressive
                    if ( currentDay == session.day_num ) {
                        currentDay++;
                        endLine = ' - ' + session.day + ' ' +session.month;
                    } else {
                        // it's not progressive

                        // if previous end line is found
                        if ( !_isEmpty( endLine ) ) {
                            label += endLine;
                            endLine = '';
                        } else if ( !_isEmpty( currentMonthLabel ) ) {
                            label += ' ' +currentMonthLabel;
                        }
                            
                        // if current session wasn't the last session
                        label += ', ' + session.day;
                        if ( session.id != lastSession.id ) {
                            currentDay = session.day_num + 1;
                        } else if ( _isEmpty( endLine ) ) {
                            label += ' ' + session.month;
                        }

                    } // end 

                } else {
                    currentMonth = session.month_num;

                    // if previous end line is found
                    if ( !_isEmpty( endLine ) ) {
                        label += endLine;
                        endLine = '';
                    } else if ( !_isEmpty( currentMonthLabel ) ) {
                        label += ' ' +currentMonthLabel;
                        currentMonthLabel = session.month;
                    }

                    // if it's not the same year
                    if ( !( currentYear == session.year_num ) ) {
                        currentYear = session.year_num;

                        // if previous end line is found
                        if ( !_isEmpty( endLine ) ) {
                            label += endLine;
                            endLine = '';
                        } else if ( !_isEmpty( currentYearlabel ) ) {
                            label += ' ' +currentYearlabel;
                            currentYearlabel = session.year;
                        }

                    } // end - currentYear

                    label += ', ' + session.day;
                    currentDay = session.day_num + 1;

                    if ( session.id == lastSession.id ) {
                        label += ' ' + session.month;
                    }

                } // end - currentMonth
                
            }
        });

        label += ( !_isEmpty( endLine ) ? endLine : '' ) + ' ' + lastSession.year; 

    } // end - sessionData
    
    return label;
}
module.exports.printPrettyDate = printPrettyDate;