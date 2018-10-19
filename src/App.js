import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FixedDimensionsBasics = () => (
	<View>
		<View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
		<View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
		<View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
	</View>
);

class Blink extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isShowingText: true };

		setInterval(() => {
			this.setState(prevState => {
				return { isShowingText: !prevState.isShowingText };
			});
		}, 500);
	}

	render() {
		let display = this.state.isShowingText ? this.props.text : ' ';
		return <Text>{display}</Text>;
	}
}

const App = props => (
	<View>
		<Text style={styles.bigblue}>
			<Blink text="Hey, I'm blinking with big blue color" />
		</Text>
		<Text style={styles.red}>
			<Blink text="Hey, I try to blinking too with red color" />
		</Text>
		<Text style={styles.bigblue}>
			<Blink text="Hey, I'm blinking either" />
		</Text>
		<FixedDimensionsBasics />
	</View>
);

export default App;

const styles = StyleSheet.create({
	bigblue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30
	},
	red: {
		color: 'red',
		fontWeight: 'bold',
		fontSize: 30
	}
});
