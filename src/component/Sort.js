import React from 'react';
import { useState } from 'react';
import { stringToBoolean } from '../helper/converter';

const Sort = ({ text, selected, modifyDataSort, firstValue, secondValue, firstOption, secondOption }) => {
	const [select, setSelect] = useState(selected);

	const onSelect = (e) => {
		let theWord = e.target.value;
		// eslint-disable-next-line
		switch (true) {
			case theWord === 'true':
				theWord = stringToBoolean(e.target.value);
				break;
			// eslint-disable-next-line
			case theWord === 'false':
				theWord = stringToBoolean('false');
				break;
			default:
				theWord = e.target.value;
		}
		setSelect(theWord);
		modifyDataSort(theWord);
	};

	return (
		<div className="w-full desktop:flex-1 desktop:border-solid desktop:border-b-2 desktop:border-indigo-600 tablet:flex-1 tablet:border-solid tablet:border-b-2 tablet:border-indigo-600 desktop:ml-5 tablet:ml-5 mobile:ml-0 mobile:flex mobile:flex-row mobile:items-center mobile:justify-between mobile:border-solid mobile:border-b-2 mobile:border-indigo-600 ">
			<div>{text}</div>
			<select
				value={select}
				label="Select Version"
				className="text-center bg-white desktop:p-[10px] desktop:border-none desktop:ml-0 desktop:w-auto desktop:mt-0 desktop:pb-3 tablet:mt-0 tablet:w-auto tablet:ml-0 tablet:border-none tablet:p-[10px] mobile:p-[10px] mobile:w-4/12 "
				onChange={onSelect}
			>
				<option value="">Unsorted</option>
				<option value={firstValue}>{firstOption}</option>
				<option value={secondValue}>{secondOption}</option>
			</select>
		</div>
	);
};

export default Sort;
