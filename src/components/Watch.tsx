import { Component } from 'react'

interface State {
	time: string
}

class Watch extends Component<Record<string, never>, State> {
	private intervalID?: NodeJS.Timeout

	constructor(props: Record<string, never>) {
		super(props)
		this.state = {
			time: new Date().toLocaleTimeString(),
		}
	}

	componentDidMount() {
		this.intervalID = setInterval(() => this.updateTime(), 1000)
	}

	componentWillUnmount() {
		if (this.intervalID) {
			clearInterval(this.intervalID)
		}
	}

	updateTime() {
		this.setState({
			time: new Date().toLocaleTimeString(),
		})
	}

	render() {
		return (
			<div className='watch'>
				<div>Время покупать!)</div> 
        <div>{this.state.time}</div>
			</div>
		)
	}
}

export default Watch
