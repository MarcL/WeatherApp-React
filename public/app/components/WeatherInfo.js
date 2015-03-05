define(function (require) {
    var React = require('react/react');
    var WeatherIcon = require('./WeatherIcon');
    var WeatherTemperature = require('./WeatherTemperature');

    var WeatherInfo = React.createFactory(React.createClass({
        render: function() {
            var div = React.createFactory('div');

            return div({className:'row', id: 'weatherInfo'},
                div({className: 'row'}, 
                    div({className: 'col-xs-offset-5 col-xs-1'},
                        WeatherIcon({conditionCode: this.props.condition.code, fontSize: '5em'})
                    ),
                    div({className: 'col-xs-1'},
                        WeatherTemperature({temperature: this.props.condition.temp, units: this.props.units, fontSize: '5em'})
                    )
                ),
                div({className: 'row'}, 
                    div({className: 'col-xs-offset-5 col-xs-2'},
                        React.DOM.h4(null, this.props.condition.text)
                    )
                )
            );
        }
    }));

    return WeatherInfo;
});