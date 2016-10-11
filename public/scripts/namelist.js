var Contestant = React.createClass({

	getDefaultProps: function() {
		return {
			name: 'Unknown'
		}
	},

	render: function() {
		return <div class="contestant">{this.props.name}</div>;
	}
});

var ContestantList = React.createClass({

	render: function() {

		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Contestant name={comment.author} key={comment.id} />
			);
		});



		return <div class="contestant-list">{commentNodes}</div>;
	}
});

var data = [
	{id: 1, author: "Pete Hunt", text: "This is one comment"},
	{id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(<ContestantList data={data} />, document.getElementById('content'));