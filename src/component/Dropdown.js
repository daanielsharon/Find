import React from 'react';
import { useState } from 'react';

const Dropdown = ({ selected, modifyDataStatus }) => {
	const [select, setSelect] = useState(selected);

	const stringToBoolean = (word) => {
		switch (word) {
			case 'true':
				return true;
			case 'false':
				return false;
			default:
				return word;
		}
	};

	const onSelect = (e) => {
		setSelect(stringToBoolean(e.target.value));
		modifyDataStatus(stringToBoolean(e.target.value));
	};

	return (
		<div className="w-auto desktop:border-solid desktop:border-b-2 desktop:border-indigo-600 tablet:border-solid tablet:border-b-2 tablet:border-indigo-600 desktop:ml-5 tablet:ml-5 mobile:ml-0">
			Completed:
			<select
				value={select}
				label="Select Version"
				className="text-center desktop:p-[10px]  desktop:border-none desktop:ml-0 desktop:w-6/12 tablet:w-auto tablet:ml-0 tablet:border-none  tablet:p-[10px] mobile:pt-4 mobile:pb-2 mobile:ml-[10.2em] mobile:w-[27vw] mobile:border-solid border-b-2 border-indigo-600 bg-white"
				onChange={onSelect}
			>
				<option value="">All</option>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</div>
	);
};

export default Dropdown;
