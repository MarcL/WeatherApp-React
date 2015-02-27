var WeatherApp = React.createFactory(React.createClass({
    render: function() {
        var div = React.createFactory('div');

        return div(null, React.DOM.h1(null, 'WeatherApp'));
    }
}));

React.render(
    WeatherApp(),
    document.getElementById('mainDiv')
);