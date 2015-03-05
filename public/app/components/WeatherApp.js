define(function (require) {
    var React = require('react/react');
    var WeatherTitle = require('./WeatherTitle');
    var WeatherIcon = require('./WeatherIcon');
    var WeatherInfo = require('./WeatherInfo');
    var WeatherDate = require('./WeatherDate');
    var WeatherTemperature = require('./WeatherTemperature');
    var YahooAttribution = require('./YahooAttribution');
    var WeatherForecast = require('./WeatherForecast');
    var SearchBox = require('./SearchBox');

    var WeatherApp = React.createFactory(React.createClass({
        createYahooWeatherUrl: function(city, units) {
            var encodedCity = escape(city);
            var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D'" + encodedCity + "')and%20u='" + units.toLowerCase() + "'&format=json";

            return url;
        },
        retrieveWeatherData: function(cityName) {
            var url = this.createYahooWeatherUrl(cityName, this.state.units);
            $.get(url, function(result) {
                if (result.query.results && result.query.results.channel) {
                    this.setState({weatherData: result.query.results.channel, city: cityName});
                }
            }.bind(this));
        },
        onCityChanged: function(cityName) {
            this.retrieveWeatherData(cityName);
        },
        getInitialState: function() {
            return {
                weatherData: null,
                units: 'c',
                city: this.props.city
            };
        },
        componentDidMount: function() {
            this.retrieveWeatherData(this.state.city);
        },
        render: function() {
            var div = React.createFactory('div');
            if (this.state.weatherData) {
                return div(null,
                    SearchBox({defaultValue: this.props.city, onCityChanged: this.onCityChanged}),
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
                    WeatherDate({pubDate: this.state.weatherData.item.pubDate}),
                    // 5 day forecast
                    WeatherForecast({
                        forecast: this.state.weatherData.item.forecast,
                        units: this.state.weatherData.units.temperature
                    }),
                    // Attribution
                    YahooAttribution({link: this.state.weatherData.link})
                );
            } else {
                return div(null, React.DOM.i({className: 'fa fa-5x fa-refresh fa-spin'}));
            }
        }
    }));

    return WeatherApp;
});