define(function (require) {
    var React = require('react/react');

    var WeatherTitle = React.createFactory(React.createClass({
        render: function() {
            var div = React.createFactory('div');
            return div(null,
                    React.DOM.h2(null, this.props.city + ", " + this.props.country)
            );
        }
    }));

    return WeatherTitle;
});
