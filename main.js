var React = require('react');
var ReactDOM = require('react-dom');

var MainLayout = React.createClass({
  render: function() {
    return (
      <div>{this.props.children}</div>
    )
  }
});

var Header = React.createClass({
  render: function(){
    return (
      <div className='header'>
      </div>
    )
  }
})

var Side = React.createClass({
  render: function(){
    return (
      <div className='side'>
      </div>
    )
  }
})

var Main = React.createClass({
  render: function(){
    return (
      <div className='main'>
        {this.props.children}
      </div>
    )
  }
})

var Sub1 = React.createClass({
  render: function(){
    return (
      <div className='sub1'>
        <h5> {this.props.data} </h5>
      </div>
    )
  }
})

var a = [];
for(var i = 0; i < 10; i++) a.push(<Sub1 key={i} data={i}/>);

var Sub2 = React.createClass({
  render: function(){
    return (
      <div className='sub2'>
      </div>
    )
  }
})

var App = React.createClass({
  render: function(){
    return (
      <MainLayout>
      <Header />
      <Side />
      <Main>
      {a}
      <Sub2 />
      </Main>
      </MainLayout>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));