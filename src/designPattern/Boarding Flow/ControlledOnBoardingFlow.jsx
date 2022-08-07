import React from 'react';

function ControlledOnBoardingFlow({ children, onFinish, currentIndex, onNext }) {
    const goToNext = stepData => {
		onNext(stepData);
	}

	const currentChild = React.Children.toArray(children)[currentIndex];
    console.log(currentChild);

	if (React.isValidElement(currentChild)) {
		return React.cloneElement(currentChild, { goToNext });
	}
	return currentChild;
}

export default ControlledOnBoardingFlow;