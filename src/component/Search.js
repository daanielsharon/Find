import React from 'react';
import { useState } from 'react';

const Search = ({ type, modifyData }) => {
	const [query, setQuery] = useState(type);

	const sendQuery = (e) => {
		setQuery(e.target.value.toLowerCase());
	};

	const enter = (e) => {
		if (e.key === 'Enter') {
			modifyData(query);
		}
	};

	const click = () => {
		modifyData(query);
	};

	return (
		<div className="flex justify-center desktop:flex-[3_3_0%] desktop:w-[100vw] desktop:mb-0 tablet:flex-[1.2_1.2_0%] tablet:mb-0 tablet:w-[100vw] mobile:w-full mobile:mb-3">
			<div className="desktop:w-full tablet:w-full mobile:w-full ">
				<div className="input-group relative flex flex-row items-stretch w-full ">
					<input
						type="search"
						className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						placeholder="Search"
						aria-label="Search"
						aria-describedby="button-addon3"
						onChange={sendQuery}
						onKeyPress={enter}
					/>
					<button
						className="btn inline-block desktop:px-6 tablet:px-6 mobile:px-7 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
						type="button"
						id="button-addon3"
						onClick={click}
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default Search;
