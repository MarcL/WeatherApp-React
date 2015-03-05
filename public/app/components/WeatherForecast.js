define(function (require) {
    var React = require('react/react');
    var WeatherIcon = require('./WeatherIcon');
    var WeatherTemperature = require('./WeatherTemperature');

    var WeatherForecast = React.createFactory(React.createClass({
        render: function() {
            var div = React.createFactory('div');

            var forecastProps = this.props;
            var forecastComponents = this.props.forecast.map(function(forecastItem) {
                return div({className: 'row weatherForecastRow', key: forecastItem.day},
                    div({className: 'col-xs-offset-4 col-xs-1'},
                        React.DOM.h3(null, forecastItem.day)
                    ),
                    div({className: 'col-xs-1'},
                        WeatherIcon({conditionCode: forecastItem.code, fontSize: '2em'})
                    ),
                    div({className: 'col-xs-1'},
                        WeatherTemperature({temperature: forecastItem.high, units: forecastProps.units, fontSize: '2em', weatherClassName: 'weatherTempHigh'})
                    ),
                    div({className: 'col-xs-1'},
                        WeatherTemperature({temperature: forecastItem.low, units: forecastProps.units, fontSize: '2em', weatherClassName: 'weatherTempLow'})
                    )
                );
            });

            return div({className: 'weatherForecast'},
                React.DOM.h3(null, '5 Day Forecast'),
                forecastComponents
            );
        }
    }));

    return WeatherForecast;
});