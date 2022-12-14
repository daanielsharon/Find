import React from 'react';
import Skeleton from 'react-loading-skeleton';
import SkeletonLoader from './SkeletonLoader';

const TodoTable = ({ isLoading, todos }) => {
	return (
		<div className="overflow-hidden overflow-x-auto border border-gray-100 rounded desktop:mt-0 tablet:mt-0 mobile:mt-4 ">
			<table className="min-w-full text-sm divide-y divide-gray-200">
				<thead>
					<tr className="bg-gray-50">
						<th className="px-4 py-6 font-poppins text-base font-medium text-left text-gray-900 whitespace-nowrap">UserId</th>
						<th className="px-4 py-6 font-poppins text-base font-medium text-left text-gray-900 whitespace-nowrap">ID</th>
						<th className="px-4 py-6 font-poppins text-base font-medium text-left text-gray-900 whitespace-nowrap">Title</th>
						<th className="px-4 py-6 font-poppins text-base font-medium text-left text-gray-900 whitespace-nowrap">Completed</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-100">
					{isLoading ? (
						<SkeletonLoader total={100} />
					) : (
						todos.map((todo, index) => {
							return (
								<tr key={index}>
									<td className="px-4 py-6 font-poppins text-base font-medium text-gray-900 whitespace-nowrap">{todo.userId || <Skeleton />}</td>
									<td className="px-4 py-6 font-poppins text-base text-gray-700 whitespace-nowrap">{todo.id || <Skeleton />}</td>
									<td className="px-4 py-6 font-poppins text-base text-gray-700 whitespace-nowrap">{todo.title}</td>
									<td className="px-4 py-6 font-poppins text-base text-gray-700 whitespace-nowrap">{todo.completed ? 'true' : 'false'}</td>
								</tr>
							);
						})
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TodoTable;
