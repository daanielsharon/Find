import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = ({ total }) => {
	return Array(total)
		.fill(0)
		.map((_, index) => (
			<tr key={index}>
				<td className="px-4 py-6 font-poppins text-base font-medium text-gray-900 whitespace-nowrap">
					<Skeleton />
				</td>
				<td className="px-4 py-6 font-poppins text-base font-medium text-gray-900 whitespace-nowrap">
					<Skeleton />
				</td>
				<td className="px-4 py-6 font-poppins text-base font-medium text-gray-900 whitespace-nowrap">
					<Skeleton />
				</td>
				<td className="px-4 py-6 font-poppins text-base font-medium text-gray-900 whitespace-nowrap">
					<Skeleton />
				</td>
			</tr>
		));
};

export default SkeletonLoader;
