import React from 'react';
import { useState } from 'react';
import { stringToBoolean } from '../helper/converter';

const Sort = ({ text, selected, modifyDataSort, firstValue, secondValue, firstOption, secondOption }) => {
	const [select, setSelect] = useState(selected);

	const onSelect = (e) => {
		console.log(typeof e.target.value);
		// eslint-disable-next-line
		switch (true) {
			case e.target.value === 'true':
				stringToBoolean(e.target.value);
			// eslint-disable-next-line
			case e.target.value === 'false':
				stringToBoolean(e.target.value);
		}
		setSelect(e.target.value);
		modifyDataSort(e.target.value);
	};

	return (
		<div className="w-full desktop:border-solid desktop:border-b-2 desktop:border-indigo-600 tablet:border-solid tablet:border-b-2 tablet:border-indigo-600 desktop:ml-5 tablet:ml-5 mobile:ml-0 mobile:flex mobile:flex-row mobile:items-center mobile:justify-between">
			{text}
			<select
				value={select}
				label="Select Version"
				className="text-center desktop:p-[10px]  desktop:border-none desktop:ml-0 desktop:w-auto desktop:inline desktop:mt-0 desktop:pb-3 tablet:mt-0 tablet:static tablet:w-auto tablet:ml-0 tablet:border-none tablet:p-[10px] mobile:pt-4 mobile:pb-2  mobile:border-solid border-b-2 border-indigo-600 bg-white"
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
