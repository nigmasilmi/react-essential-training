import React from 'react';
import ReactDOM from 'react-dom';

let equipment = [
  {
    brand: "Brooks",
    model: "Ghost 9",
    type: "Cushioning",
    sole: "Neutral",
    kms: 30
  },
  {
    brand: "Asics",
    model: "Gel Superion",
    type: "Stability",
    sole: "Pronation",
    kms: 35
  },
  {
    brand: "New Balance",
    model: "1080 V4",
    type: "Cushioning",
    sole: "Neutral",
    kms: 20
  },
  {
    brand: "Saucony",
    model: "Peregrine 8",
    type: "Trail",
    sole: "Neutral",
    kms: 50
  },
];

// calc function

const addUpThoseKms = (equipment) => {
  let total = 0;
  for (let pair of equipment) {

    total += pair.kms;

  }
  return total;
};

const KmsCounter = () => {
  return (
    <section>
      <article>
        <div> <strong>I am the Child component</strong> and this is the Weekley Millage so far: {addUpThoseKms(equipment)}  </div>
      </article>
    </section>
  )
};



const Pair = ({ brand, model, kms }) => {
  return (
    <div>
      <h3>
        The {brand} / {model} are onboard with: {kms} kms
      </h3>
    </div>
  )
};

class EquipShare extends React.Component {
  constructor(props) {
    super(props)
    this.state = { running: true }
    // binding this
    this.goToRun = this.goToRun.bind(this)
  }

  // changing the state method

  goToRun() {
    this.setState({
      running: !this.state.running
    })
  }

  render() {
    const { equipment } = this.props
    return (
      <section>
        <div>{equipment.map((pair, i) => <Pair key={i} brand={pair.brand} model={pair.model} kms={pair.kms} />)}</div>
        <div><strong>Are we running, state?</strong> {this.state.running ? 'We are running' : 'We are just preparing to run'}</div>
        <button onClick={this.goToRun}><strong>Change it</strong></button>
        <KmsCounter />
      </section >
    )
  }

}

ReactDOM.render(
  <div>
    <EquipShare equipment={equipment} />
  </div>,
  document.getElementById("root")

);