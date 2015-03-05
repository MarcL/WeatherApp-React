define(function (require) {
    var React = require('react/react');

    var WeatherDate = React.createFactory(React.createClass({
        render: function() {
            var div = React.createFactory('div');
            return div({className: 'weatherInfo'},
                React.DOM.h4({className: 'weatherDate'}, this.props.pubDate)
            );
        }
    }));

    return WeatherDate;
});