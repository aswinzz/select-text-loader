import { Component } from 'react';

class SelectTextLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingIndex: 0
    };
    this.secondsRemaining = null;
    this.intervalHandle = null;
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    if (this.props.loading) {
      this.startCountDown();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading && this.props.loading && this.props.data && this.props.data.length > 0) {
      this.startCountDown();
    }
  }

  tick() {
    console.log("Ticking");
    let loadingIndex = this.state.loadingIndex;

    if (loadingIndex === this.props.data.length - 1) {
      loadingIndex = 0;
    } else {
      loadingIndex += 1;
    } // console.log(loadingIndex);


    this.setState({
      loadingIndex
    });

    if (!this.props.loading) {
      console.log("Clearing");
      clearInterval(this.intervalHandle);
    }
  }

  startCountDown() {
    console.log("Started Countdown");
    let timeGap = 60;

    if (this.props.timeGap) {
      timeGap = this.props.timeGap;
    }

    this.intervalHandle = setInterval(this.tick, timeGap);
  }

  render() {
    return this.props.data ? this.props.data[this.state.loadingIndex] : "";
  }

}

export default SelectTextLoader;