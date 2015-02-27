var WeatherApp = React.createFactory(React.createClass({
    retrieveWeatherData: function() {
        console.log('retrieve weather data');
    },
    getInitialState: function() {
        return {
            weatherData: null
        };
    },
    componentDidMount: function() {
        this.retrieveWeatherData();
        // setInterval(this.retrieveWeatherData, this.props.pollInterval);
    },
    render: function() {
        var div = React.createFactory('div');

        return div(null, React.DOM.h1(null, 'WeatherApp'));
    }
}));

React.render(
    WeatherApp({pollInterval: 30000}),
    document.getElementById('mainDiv')
);