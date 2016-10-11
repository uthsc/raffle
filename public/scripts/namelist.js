var Contestant = React.createClass({

	getDefaultProps: function() {
		return {
			name: 'Unknown'
		}
	},

	render: function() {
		return <div className="contestant">{this.props.name}</div>;
	}
});

var ContestantList = React.createClass({

	render: function() {

		var contestantNodes = this.props.contestants.map(function(contestant) {
			return (
				<Contestant name={contestant.name} key={contestant.id} />
			);
		});

		return (
			<div className="contestant-list">
				<h2>Contestants</h2>
				{contestantNodes}
			</div>
		);
	}
});

var ChooseWinnerButton = React.createClass({

	handleClick: function(){
		this.props.test.data.contestants[0] = {id:12, name:"bob"}; //just testing (use setState()
		console.log(this.props.test);
	},

	render: function(){
		return (
			<button onClick={this.handleClick}>
				Choose Winner
			</button>
		);
	}
});

var Raffle = React.createClass({


	render: function() {
		return (
			<div className="raffle">
				<h1>Raffle</h1>
				<ContestantList contestants={this.props.data.contestants} />
				<WinnerList winners={this.props.data.winners} />
				<ChooseWinnerButton test={this.props}/>
			</div>
		);
	}
});

var WinnerList = React.createClass({
	render: function() {

		var winnerNodes = this.props.winners.map(function(winner) {
			return (
				<Contestant name={winner.name} key={winner.id} />
			);
		});

		return (
			<div className="winner-list">
				<h2>Winners</h2>
				{winnerNodes}
			</div>
		);
	}
});

var data = {
	winners: [
		{id: 1, name: "Pete Winner"},
		{id: 2, name: "Jordan Winner"}
	],
	contestants: [
		{id: 3, name: "Pete Contestant"},
		{id: 4, name: "Jordan Contestant"}
	]
};

ReactDOM.render(<Raffle data={data} />, document.getElementById('content'));