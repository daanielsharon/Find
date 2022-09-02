import React from 'react';
import { useState } from 'react';

const Sort = ({ text, selected, modifyDataSort }) => {
	const [select, setSelect] = useState(selected);

	const onSelect = (e) => {
		setSelect(e.target.value);
		modifyDataSort(e.target.value);
	};

	return (
		<div className="w-auto desktop:border-solid desktop:border-b-2 desktop:border-indigo-600 desktop:ml-5 desktop:px-0 desktop:pb-0 desktop:mt-0 tablet:mt-0 tablet:pb-0 tablet:px-0 tablet:border-solid tablet:border-b-2 tablet:border-indigo-600  tablet:ml-5 mobile:px-0 mobile:pb-3 mobile:mt-5">
			{text}
			<select
				value={select}
				label="Select Version"
				className="text-center desktop:p-[10px]  desktop:border-none desktop:ml-0 desktop:w-auto desktop:inline desktop:mt-0 desktop:pb-3 tablet:mt-0 tablet:static tablet:w-auto tablet:ml-0 tablet:border-none tablet:p-[10px] mobile:pt-4 mobile:pb-2 mobile:absolute mobile:right-5 mobile:w-[27vw] mobile:-mt-5 mobile:border-solid border-b-2 border-indigo-600 bg-white"
				onChange={onSelect}
			>
				<option value="">Unsorted</option>
				<option value="ascending">Ascending</option>
				<option value="descending">Descending</option>
			</select>
		</div>
	);
};

export default Sort;
