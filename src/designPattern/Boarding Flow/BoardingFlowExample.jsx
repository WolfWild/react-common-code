import React, { useState } from 'react';
import ControlledOnBoardingFlow from './ControlledOnBoardingFlow';

const StepOne = ({ goToNext }) => (
	<>
	<h1>Step 1</h1>
	<button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
	</>
);
const StepTwo = ({ goToNext }) => (
	<>
	<h1>Step 2</h1>
	<button onClick={() => goToNext({ age: 50 })}>Next</button>
	</>
);
const StepThree = ({ goToNext }) => (
	<>
	<h1>Step 3</h1>
	<button onClick={() => goToNext({address: 'HCM'})}>Next</button>
	</>
);
const StepFour = ({ goToNext }) => (
	<>
	<h1>Step 4</h1>
	<button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
	</>
);


function BoardingFlowExample(props) {
    const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);	

	const onNext = stepData => {
		setOnboardingData({ ...onboardingData, ...stepData });
		setCurrentIndex(currentIndex + 1);
	}
    console.log(onboardingData);
	return (
		<ControlledOnBoardingFlow
			currentIndex={currentIndex}
			onNext={onNext}
		>
			<StepOne />
			<StepTwo />
			<StepThree />
			<StepFour />
		</ControlledOnBoardingFlow>
	);
}

export default BoardingFlowExample;