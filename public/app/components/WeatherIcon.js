define(function (require) {
    var React = require('react/react');

    var WeatherIcon = React.createFactory(React.createClass({
        getWeatherIconFromConditionCode: function(code) {
            var iconMap = [
                {icon: 'wi-tornado', colour: 'dayWindy'}, // <code number="0" description="tornado"/>
                {icon: 'wi-day-thunderstorm', colour: 'dayStorm'}, // <code number="1" description="tropical storm"/>
                {icon: 'wi-hurricane', colour: 'dayWindy'}, // <code number="2" description="hurricane"/>
                {icon: 'wi-thunderstorm', colour: 'dayStorm'}, // <code number="3" description="severe thunderstorms"/>
                {icon: 'wi-thunderstorm', colour: 'dayStorm'}, // <code number="4" description="thunderstorms"/>
                {icon: 'wi-sleet', colour: 'daySleet'}, // <code number="5" description="mixed rain and snow"/>
                {icon: 'wi-sleet', colour: 'daySleet'}, // <code number="6" description="mixed rain and sleet"/>
                {icon: 'wi-sleet', colour: 'daySleet'}, // <code number="7" description="mixed snow and sleet"/>
                {icon: 'wi-rain-mix', colour: 'dayRainy'}, // <code number="8" description="freezing drizzle"/>
                {icon: 'wi-rain-mix', colour: 'dayRainy'}, // <code number="9" description="drizzle"/>
                {icon: 'wi-rain', colour: 'dayRainy'}, // <code number="10" description="freezing rain"/>
                {icon: 'wi-rain-mix', colour: 'dayRainy'}, // <code number="11" description="showers"/>
                {icon: 'wi-rain-mix', colour: 'dayRainy'}, // <code number="12" description="showers"/>
                {icon: 'wi-sprinkle', colour: 'daySnowy'}, // <code number="13" description="snow flurries"/>
                {icon: 'wi-snow', colour: 'daySnowy'}, // <code number="14" description="light snow showers"/>
                {icon: 'wi-snow-wind', colour: 'daySnowy'}, // <code number="15" description="blowing snow"/>
                {icon: 'wi-snow', colour: 'daySnowy'}, // <code number="16" description="snow"/>
                {icon: 'wi-hail', colour: 'daySnowy'}, // <code number="17" description="hail"/>
                {icon: 'wi-sleet', colour: 'daySleet'}, // <code number="18" description="sleet"/>
                {icon: 'wi-dust', colour: 'dayCloudy'}, // <code number="19" description="dust"/>
                {icon: 'wi-fog', colour: 'dayCloudy'}, // <code number="20" description="foggy"/>
                {icon: 'wi-day-haze', colour: 'dayCloudy'}, // <code number="21" description="haze"/>
                {icon: 'wi-smoke', colour: 'dayCloudy'}, // <code number="22" description="smoky"/>
                {icon: 'wi-windy', colour: 'dayWindy'}, // <code number="23" description="blustery"/>
                {icon: 'wi-windy', colour: 'dayWindy'}, // <code number="24" description="windy"/>
                {icon: 'wi-snowflake-cold', colour: 'daySnowy'}, // <code number="25" description="cold"/>
                {icon: 'wi-cloudy', colour: 'dayCloudy'}, // <code number="26" description="cloudy"/>
                {icon: 'wi-night-alt-cloudy', colour: 'nightCloudy'}, // <code number="27" description="mostly cloudy (night)"/>
                {icon: 'wi-day-cloudy', colour: 'dayCloudy'}, // <code number="28" description="mostly cloudy (day)"/>
                {icon: 'wi-night-partly-cloudy', colour: 'nightCloudy'}, // <code number="29" description="partly cloudy (night)"/>
                {icon: 'wi-day-cloudy', colour: 'dayCloudy'}, // <code number="30" description="partly cloudy (day)"/>
                {icon: 'wi-night-clear'}, // <code number="31" description="clear (night)"/>
                {icon: 'wi-day-sunny', colour: 'daySunny'}, // <code number="32" description="sunny"/>
                {icon: 'wi-night-clear'}, // <code number="33" description="fair (night)"/>
                {icon: 'wi-day-sunny', colour: 'daySunny'}, // <code number="34" description="fair (day)"/>
                {icon: 'wi-day-hail', colour: 'daySnowy'}, // <code number="35" description="mixed rain and hail"/>
                {icon: 'wi-hot', colour: 'daySunny'}, // <code number="36" description="hot"/>
                {icon: 'wi-thunderstorm', colour: 'dayStorm'}, // <code number="37" description="isolated thunderstorms"/>
                {icon: 'wi-storm-showers', colour: 'dayStorm'}, // <code number="38" description="scattered thunderstorms"/>
                {icon: 'wi-storm-showers', colour: 'dayStorm'}, // <code number="39" description="scattered thunderstorms"/>
                {icon: 'wi-showers', colour: 'dayRainy'}, // <code number="40" description="scattered showers"/>
                {icon: 'wi-snow', colour: 'daySnowy'}, // <code number="41" description="heavy snow"/>
                {icon: 'wi-sprinkle', colour: 'daySnowy'}, // <code number="42" description="scattered snow showers"/>
                {icon: 'wi-snow', colour: 'daySnowy'}, // <code number="43" description="heavy snow"/>
                {icon: 'wi-cloudy', colour: 'dayCloudy'}, // <code number="44" description="partly cloudy"/>
                {icon: 'wi-thunderstorm', colour: 'dayStorm'}, // <code number="45" description="thundershowers"/>
                {icon: 'wi-snow', colour: 'daySnowy'}, // <code number="46" description="snow showers"/>
                {icon: 'wi-thunderstorm', colour: 'dayStorm'} // <code number="47" description="isolated thundershowers"/>
            ];

            var iconName;
            var colour = '';
            if (code < iconMap.length) {
                iconName = iconMap[code].icon;
                colour = iconMap[code].colour ? iconMap[code].colour : '';
            } else {
                // Not found
                iconName = 'wi-alien';
            }
            return 'wi ' + iconName + ' ' + colour;
        },
        render: function() {
            var div = React.createFactory('div');
            return div(null,
                React.DOM.i({className: this.getWeatherIconFromConditionCode(this.props.conditionCode), style: {fontSize: this.props.fontSize}})
            );
        }
    }));

    return WeatherIcon;
});