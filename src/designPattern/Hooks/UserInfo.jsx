import axios from 'axios';
import { useDataSource } from './useDataSource';

const serverResource = resourceUrl => async () => {
	const response = await axios.get(resourceUrl);
	return response.data;
};

const localStorageResource = key => () => {
	return localStorage.getItem(key);
}

export const UserInfo = ({ userId }) => {
	const user = useDataSource(serverResource(`/users/${userId}`));
	const message = useDataSource(localStorageResource('message'));

	const { name, age, address } = user || {};

	return user ? (
		<>
    <ul>
        <li>
            Name: {name}
        </li>
        <li>
            Age: {age}
        </li>
        <li>
            Address: {address}
        </li>
    </ul>
		</>
	) : <p>Loading...</p>;
}