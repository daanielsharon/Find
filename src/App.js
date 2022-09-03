import Search from './component/Search';
import Sort from './component/Sort';
import TodoTable from './component/TodoTable';
import { useState } from 'react';
import { useEffect } from 'react';
import http from './helper/interceptor';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [type, setType] = useState('');
	const [status, setStatus] = useState('');
	const [sort, setSort] = useState({ title: '', userId: '', completed: '' });

	console.log(typeof sort.completed);

	useEffect(() => {
		getTodoList();
	}, []);

	const modifyData = (query) => setType(query);
	const modifyDataStatus = (option) => setStatus(option);
	const modifyDataSortTitle = (option) => setSort({ ...sort, title: option });
	const modifyDataSortUserId = (option) => setSort({ ...sort, userId: option });

	const filter = (todos) => {
		const selected = typeof status == 'boolean' ? status : '';
		return todos
			.filter((todo) => todo['title'].toLowerCase().includes(type))
			.filter((todo) => {
				if (selected !== '') {
					return todo['completed'] === status;
				}
				return todo;
			})
			.sort((a, b) => {
				switch (sort.title) {
					case '':
						// eslint-disable-next-line
						return;
					case 'ascending':
						return a.title.localeCompare(b.title);
					case 'descending':
						return b.title.localeCompare(a.title);
					default:
						// eslint-disable-next-line
						return;
				}
			})
			.sort((a, b) => {
				switch (sort.userId) {
					case '':
						// eslint-disable-next-line
						return;
					case 'ascending':
						return a.userId - b.userId;
					case 'descending':
						return b.userId - a.userId;
					default:
						// eslint-disable-next-line
						return;
				}
			});
	};

	const getTodoList = async () => {
		const response = await http.get('/todos');
		setTodos(response.data);
		setIsLoading(false);
	};

	return (
		<div className="p-4">
			<SkeletonTheme baseColor="#f3f4f6" highlightColor="#e5e7eb">
				<div className="desktop:flex desktop:flex-row desktop:items-center desktop:justify-start desktop:w-full desktop:mb-5 desktop:py-5 tablet:flex tablet:flex-row tablet:items-center tablet:justify-start tablet:w-full tablet:mb-5 tablet:py-5 mobile:flex mobile:flex-col mobile:items-start mobile:py-3">
					<Search type={type} modifyData={modifyData} />
					<Sort text={'Completed:'} selected={sort.completed} modifyDataSort={modifyDataStatus} firstValue={'true'} secondValue={'false'} firstOption={'True'} secondOption={'False'} />
					<Sort text={'Sort by title:'} selected={sort.title} modifyDataSort={modifyDataSortTitle} firstValue={'ascending'} secondValue={'descending'} firstOption={'Ascending'} secondOption={'Descending'} />
					<Sort text={'Sort by userId: '} selected={sort.userId} modifyDataSort={modifyDataSortUserId} firstValue={'ascending'} secondValue={'descending'} firstOption={'Ascending'} secondOption={'Descending'} />
				</div>
				<TodoTable isLoading={isLoading} todos={filter(todos)} />
			</SkeletonTheme>
		</div>
	);
}

export default App;
