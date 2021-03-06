'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarHeader = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _WithUtils = require('../_shared/WithUtils');

var _WithUtils2 = _interopRequireDefault(_WithUtils);




function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarHeader = exports.CalendarHeader = function CalendarHeader(props) {
  var classes = props.classes,
      theme = props.theme,
      currentMonth = props.currentMonth,
      onMonthChange = props.onMonthChange,
      leftArrowIcon = props.leftArrowIcon,
      rightArrowIcon = props.rightArrowIcon,
      disablePrevMonth = props.disablePrevMonth,
      disableNextMonth = props.disableNextMonth,
      utils = props.utils;


  var rtl = theme.direction === 'rtl';

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(currentMonth));
  };
  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(currentMonth));
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: classes.switchHeader },
      _react2.default.createElement(
        _IconButton2.default,
        { disabled: disablePrevMonth, onClick: selectPreviousMonth },
        _react2.default.createElement(
          _Icon2.default,
          null,
          rtl ? rightArrowIcon : leftArrowIcon
        )
      ),
      _react2.default.createElement(
        _Typography2.default,
        { variant: 'body1' },
	getArabicMonth(utils.getCalendarHeaderText(currentMonth))
        
      ),
      _react2.default.createElement(
        _IconButton2.default,
        { disabled: disableNextMonth, onClick: selectNextMonth },
        _react2.default.createElement(
          _Icon2.default,
          null,
          rtl ? leftArrowIcon : rightArrowIcon
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.daysHeader },
      ["اﻷحد","اﻷثنين", "الثلاثاء", "اﻷربعاء", "الخميس", "الجمعة","السبت"].map(function (day, index) {
        return _react2.default.createElement(
          _Typography2.default
          // eslint-disable-next-line react/no-array-index-key
          ,
          { key: index,
            variant: 'caption',
            className: classes.dayLabel
          },
          day
        );
      })
    )
  );
};

CalendarHeader.propTypes = {
  currentMonth: _propTypes2.default.object.isRequired,
  onMonthChange: _propTypes2.default.func.isRequired,
  classes: _propTypes2.default.object.isRequired,
  theme: _propTypes2.default.object.isRequired,
  leftArrowIcon: _propTypes2.default.node,
  rightArrowIcon: _propTypes2.default.node,
  disablePrevMonth: _propTypes2.default.bool,
  disableNextMonth: _propTypes2.default.bool,
  utils: _propTypes2.default.object.isRequired
};

CalendarHeader.defaultProps = {
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right',
  disablePrevMonth: false,
  disableNextMonth: false
};

var styles = function styles(theme) {
  return {
    switchHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.unit
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 16
    },
    dayLabel: {
      width: 36,
      margin: '0 2px',
      textAlign: 'center',
      color: theme.palette.text.hint
    }
  };
};

var getArabicMonth =  function (month) {
	var spacePos = month.search(" ");
	var currentYear = month.slice(spacePos);	
	var monthSliced = month.slice(0,spacePos);
	switch(monthSliced)
{
	case "January" : return  " يناير" +"  "+ currentYear ;
	case "February" : return  " فبراير" +"  "+ currentYear;
	case "March" : return  " مارس" + "  "+currentYear;
	case "April" : return  " أبريل" + "  "+currentYear;
	case "May" : return  " مايو" + "  "+currentYear;
	case "June" : return  " يونيو" + "  "+currentYear;
	case "July" : return  " يوليو" + "  "+currentYear;
	case "August" : return  " أغسطس" +"  "+currentYear;
	case "September" : return  " سبتمبر" +"  "+currentYear;
	case "October" : return  " أكتوبر" +"  "+currentYear;
	case "November" : return  " نوفمبر" +"  "+currentYear;
	case "December" : return  " ديسمبر" +"  "+currentYear;

	}
}

exports.default = (0, _withStyles2.default)(styles, { withTheme: true, name: 'MuiPickersCalendarHeader' })((0, _WithUtils2.default)()(CalendarHeader));
