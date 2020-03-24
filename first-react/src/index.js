import React from 'react';
import ReactDOM from 'react-dom';


const KmsCounter = ({ equipOne, equipTwo }) => {
  return (
    <section>
      <article>
        <div> <strong>I am the Child component</strong> and this is the Weekley Millage so far: {equipOne} + {equipTwo} </div>
      </article>
    </section>
  )
};

const EquipShare = ({ asicsKms, brooksKms }) => {
  return (
    <section>
      <div>The Asics are onboard with {asicsKms} Kms </div>
      <div>The Brooks are onboard with {brooksKms} Kms </div>
      <KmsCounter equipOne={asicsKms} equipTwo={brooksKms} />
    </section>
  )
};

ReactDOM.render(
  <div>
    <EquipShare asicsKms={50} brooksKms={90} />
  </div>,
  document.getElementById("root")

);