define(function (require) {
    var React = require('react/react');

    var WeatherTemperature = React.createFactory(React.createClass({
        getDefaultProps: function() {
            return {
                weatherClassName: '',
            };
        },
        render: function() {
            return React.DOM.span({className: 'weatherTemperature ' + this.props.weatherClassName, style: {fontSize: this.props.fontSize}}, this.props.temperature + String.fromCharCode(176) + this.props.units);
        }
    }));

    return WeatherTemperature;
});