var div = React.createFactory('div');

var WeatherTitle = React.createFactory(React.createClass({
    render: function() {
        return div(null,
                React.DOM.h1(null, this.props.city),
                React.DOM.h3(null, this.props.country)
        );
    }
}));

var WeatherIcon = React.createFactory(React.createClass({
    render: function() {
        return div({className: 'weatherInfo'},
            React.DOM.i({className: 'fa fa-5x fa-sun-o'})
        );
    }
}));

var WeatherInfo = React.createFactory(React.createClass({
    render: function() {
        return div({className: 'weatherInfo'},
            WeatherIcon({conditionCode: this.props.condition.code}),
            React.DOM.h2(null, this.props.condition.temp + ' ' + String.fromCharCode(176) + this.props.units),
            React.DOM.h4(null, this.props.condition.text)
        );
    }
}));

var WeatherDate = React.createFactory(React.createClass({
    render: function() {
        return div({className: 'weatherInfo'},
            React.DOM.h4(null, this.props.pubDate)
        );
    }
}));

var WeatherApp = React.createFactory(React.createClass({
    createYahooWeatherUrl: function(city, units) {
        var encodedCity = escape(city);
        var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D'" + encodedCity + "')and%20u='" + units.toLowerCase() + "'&format=json";

        return url;
    },
    retrieveWeatherData: function() {
        console.log('retrieve weather data');

        var url = this.createYahooWeatherUrl(this.state.city, this.state.units);
        $.get(url, function(result) {
            this.setState({weatherData: result.query.results.channel});
        }.bind(this));
    },
    getInitialState: function() {
        return {
            weatherData: null,
            units: 'c',
            city: 'warrington, uk'
        };
    },
    componentDidMount: function() {
        this.retrieveWeatherData();
        // setInterval(this.retrieveWeatherData, this.props.pollInterval);
    },
    render: function() {
        if (this.state.weatherData) {
            return div(null,
                // Weather Title
                WeatherTitle({
                    city: this.state.weatherData.location.city,
                    country: this.state.weatherData.location.country,
                }),
                // Weather Info
                WeatherInfo({
                    condition: this.state.weatherData.item.condition,
                    units: this.state.weatherData.units.temperature
                }),
                // Date
                WeatherDate({pubDate: this.state.weatherData.item.pubDate})
            );
        } else {
            return div(null, React.DOM.i({className: 'fa fa-5x fa-refresh fa-spin'}));
        }
    }
}));

React.render(
    WeatherApp({pollInterval: 30000}),
    document.getElementById('mainDiv')
);