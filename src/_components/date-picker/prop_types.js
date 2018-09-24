import PropTypes from "prop-types";

export default {
    className: PropTypes.string,
    defaultValue:PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.arrayOf(
            PropTypes.instanceOf(Date)
        ),
    ]),
    disabled: PropTypes.bool,
    format: PropTypes.string,
    mode: PropTypes.oneOf([
        "date", "datetime", "month", "year", "time", "week",
    ]),
    onChange: PropTypes.func,
    onOk: PropTypes.func,
    open: PropTypes.bool,
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    pickRange: PropTypes.bool, // NOTE: not sure about this name
    placeholder: PropTypes.string,
    prefixCls: PropTypes.string,
    popupClassName: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.arrayOf(
            PropTypes.instanceOf(Date)
        ),
    ]),
    webOnly: PropTypes.shape({
        disabledDate: PropTypes.func,
        disabledHours: PropTypes.func,
        disabledMinutes: PropTypes.func,
        disabledSeconds: PropTypes.func,
        disabledTime: PropTypes.func,
    }),
};