var div = React.createFactory('div');

var WeatherTitle = React.createFactory(React.createClass({
    render: function() {
        return div(null,
                React.DOM.h3(null, this.props.city)
        );
    }
}));

var WeatherIcon = React.createFactory(React.createClass({
    getWeatherIconFromConditionCode: function(code) {
        var iconMap = [
            'wi-tornado', // <code number="0" description="tornado"/>
            'wi-day-thunderstorm', // <code number="1" description="tropical storm"/>
            'wi-hurricane', // <code number="2" description="hurricane"/>
            'wi-thunderstorm', // <code number="3" description="severe thunderstorms"/>
            'wi-thunderstorm', // <code number="4" description="thunderstorms"/>
            'wi-sleet', // <code number="5" description="mixed rain and snow"/>
            'wi-sleet', // <code number="6" description="mixed rain and sleet"/>
            'wi-sleet', // <code number="7" description="mixed snow and sleet"/>
            'wi-rain-mix', // <code number="8" description="freezing drizzle"/>
            'wi-rain-mix', // <code number="9" description="drizzle"/>
            'wi-rain', // <code number="10" description="freezing rain"/>
            'wi-rain-mix', // <code number="11" description="showers"/>
            'wi-rain-mix', // <code number="12" description="showers"/>
            'wi-sprinkle', // <code number="13" description="snow flurries"/>
            'wi-snow', // <code number="14" description="light snow showers"/>
            'wi-snow-wind', // <code number="15" description="blowing snow"/>
            'wi-snow', // <code number="16" description="snow"/>
            'wi-hail', // <code number="17" description="hail"/>
            'wi-sleet', // <code number="18" description="sleet"/>
            'wi-dust', // <code number="19" description="dust"/>
            'wi-fog', // <code number="20" description="foggy"/>
            'wi-day-haze', // <code number="21" description="haze"/>
            'wi-smoke', // <code number="22" description="smoky"/>
            'wi-windy', // <code number="23" description="blustery"/>
            'wi-windy', // <code number="24" description="windy"/>
            'wi-snowflake-cold', // <code number="25" description="cold"/>
            'wi-cloudy', // <code number="26" description="cloudy"/>
            'wi-night-alt-cloudy', // <code number="27" description="mostly cloudy (night)"/>
            'wi-day-cloudy', // <code number="28" description="mostly cloudy (day)"/>
            'night-partly-cloudy', // <code number="29" description="partly cloudy (night)"/>
            'wi-day-cloudy', // <code number="30" description="partly cloudy (day)"/>
            'wi-night-clear', // <code number="31" description="clear (night)"/>
            'wi-day-sunny', // <code number="32" description="sunny"/>
            'wi-night-clear', // <code number="33" description="fair (night)"/>
            'wi-day-sunny', // <code number="34" description="fair (day)"/>
            'wi-day-hail', // <code number="35" description="mixed rain and hail"/>
            'wi-hot', // <code number="36" description="hot"/>
            'wi-thunderstorm', // <code number="37" description="isolated thunderstorms"/>
            'wi-storm-showers', // <code number="38" description="scattered thunderstorms"/>
            'wi-storm-showers', // <code number="39" description="scattered thunderstorms"/>
            'wi-showers', // <code number="40" description="scattered showers"/>
            'wi-snow', // <code number="41" description="heavy snow"/>
            'wi-sprinkle', // <code number="42" description="scattered snow showers"/>
            'wi-snow', // <code number="43" description="heavy snow"/>
            'wi-cloudy', // <code number="44" description="partly cloudy"/>
            'wi-thunderstorm', // <code number="45" description="thundershowers"/>
            'wi-snow', // <code number="46" description="snow showers"/>
            'wi-thunderstorm', // <code number="47" description="isolated thundershowers"/>
        ];

        var iconName;
        if (code < iconMap.length) {
            iconName = iconMap[code];
        } else {
            // Not found
            iconName = 'wi-alien';
        }
        return 'wi ' + iconName;
    },
    render: function() {
        return div(null,
            React.DOM.i({className: this.getWeatherIconFromConditionCode(this.props.conditionCode), style: {fontSize: this.props.fontSize}})
        );
    }
}));

var WeatherTemperature = React.createFactory(React.createClass({
    render: function() {
        return React.DOM.span({className: 'weatherTemperature', style: {fontSize: this.props.fontSize}}, this.props.temperature + String.fromCharCode(176) + this.props.units);
    }
}));

var WeatherInfo = React.createFactory(React.createClass({
    render: function() {
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

var WeatherDate = React.createFactory(React.createClass({
    render: function() {
        return div({className: 'weatherInfo'},
            React.DOM.h4(null, this.props.pubDate)
        );
    }
}));

var YahooAttribution = React.createFactory(React.createClass({
    render: function() {
        return div(null,
            React.DOM.a({href: this.props.link, target: '_blank'},
                React.DOM.h5(null, 'Weather provided by Yahoo')
            ),
            React.DOM.a({href: 'https://www.yahoo.com/?ilc=401', target: '_blank'},
                React.DOM.img({src: 'https://poweredby.yahoo.com/purple.png', width: '134', height: '29'})
            )
        );
    }
}));

var WeatherForecast = React.createFactory(React.createClass({
    render: function() {
        var forecastProps = this.props;
        var forecastComponents = this.props.forecast.map(function(forecastItem) {
            return div({className: 'row'},
                div({className: 'col-xs-offset-4 col-xs-1'},
                    React.DOM.h3(null, forecastItem.day)
                ),
                div({className: 'col-xs-1'},
                    WeatherIcon({conditionCode: forecastItem.code, fontSize: '2em'})
                ),
                div({className: 'col-xs-1'},
                    WeatherTemperature({temperature: forecastItem.high, units: forecastProps.units, fontSize: '2em'})
                ),
                div({className: 'col-xs-1'},
                    WeatherTemperature({temperature: forecastItem.low, units: forecastProps.units, fontSize: '2em'})
                )
            );
        });
        return div({className: 'WeatherForecastRow'},
            React.DOM.h3(null, '5 Day Forecast'),
            forecastComponents
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
        setInterval(this.retrieveWeatherData, this.props.pollInterval);
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

React.render(
    WeatherApp({pollInterval: 30000}),
    document.getElementById('mainDiv')
);