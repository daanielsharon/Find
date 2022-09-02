import React from 'react';

const TodoTable = ({ loading, todos }) => {
	return (
		<div className="overflow-hidden overflow-x-auto border border-gray-100 rounded mobile:mt-1 ">
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
					{todos.map((todo, index) => {
						return (
							<tr key={index}>
								<td className="px-4 py-6 font-poppins text-base font-medium text-gray-900 whitespace-nowrap">{todo.userId}</td>
								<td className="px-4 py-6 font-poppins text-base text-gray-700 whitespace-nowrap">{todo.id}</td>
								<td className="px-4 py-6 font-poppins text-base text-gray-700 whitespace-nowrap">{todo.title}</td>
								<td className="px-4 py-6 font-poppins text-base text-gray-700 whitespace-nowrap">{todo.completed ? 'true' : 'false'}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TodoTable;
