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
		<div className="w-full desktop:border-solid desktop:border-b-2 desktop:border-indigo-600 tablet:border-solid tablet:border-b-2 tablet:border-indigo-600 desktop:ml-5 tablet:ml-5 mobile:ml-0 mobile:flex mobile:flex-row mobile:items-center mobile:justify-between">
			Completed:
			<select
				value={select}
				label="Select Version"
				className="text-center bg-white desktop:p-[10px]  desktop:border-none desktop:ml-0 desktop:w-auto desktop:inline desktop:mt-0 desktop:pb-3 tablet:mt-0 tablet:static tablet:w-auto tablet:ml-0 tablet:border-none tablet:p-[10px] mobile:pt-4 mobile:pb-2  mobile:border-solid mobile:border-b-2 mobile:border-indigo-600 mobile:w-[26vw] "
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
