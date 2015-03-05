define(function (require) {
    var React = require('react/react');

    var SearchBox = React.createFactory(React.createClass({
        onHandleSubmit: function(event) {
            event.preventDefault();
            var cityName = this.refs.citySearch.getDOMNode().value;
            if (!cityName) {
                return;
            }

            this.props.onCityChanged(cityName);
            this.refs.citySearch.getDOMNode().value = '';
        },
        render: function() {
            var div = React.createFactory('div');
            
            return div({className: 'weatherSearch row'},
                div({className: 'col-xs-offset-4 col-xs-4'},
                    React.DOM.form({className: 'searchForm', onSubmit: this.onHandleSubmit},
                        div({className: 'input-group'},
                            React.DOM.input({
                                className: 'form-control',
                                type: 'text',
                                placeholder: this.props.defaultValue,
                                ref: 'citySearch'
                            }),
                            React.DOM.span({className: 'input-group-btn'},
                                React.DOM.button({className: 'btn btn-default', type: 'submit'}, 'Search')
                            )
                        )
                    )
                )
            );
        }
    }));

    return SearchBox;
});