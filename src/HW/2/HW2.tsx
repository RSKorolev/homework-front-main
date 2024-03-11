import { useState } from 'react';
import { UserList2 } from './UserList2';

export type AddressType = {
    street: string;
    city: string;
};

export type UserType = {
    id: number;
    name: string;
    age: number;
    address: AddressType; // пропиши типизацию
};

export type UsersObjectType = {
    myFriends: UserType[]; // пропиши типизацию
};

export const HW2 = () => {
    // 1️⃣ Раскомментируйте JSX (UserList2.tsx) и вы увидите,
    // что приложение начнет гореть красным и ругаться 😡
    // 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
    // - прописать типизацию, где необходимо
    // - починить все, что горит красным
    // - дописать функциональность (где указано комментариями)
    // - приложение должно компилироваться и запускаться в браузере

    // ❗ Массив с данными не трогаем!

    const users = {
        myFriends: [
            {
                id: 1,
                name: 'John',
                age: 25,
                address: { street: '123 Main St', city: 'New York' },
            },
            {
                id: 2,
                name: 'Alice',
                age: 30,
                address: { street: '456 Elm St', city: 'San Francisco' },
            },
            {
                id: 3,
                name: 'Bob',
                age: 35,
                address: { street: '789 Oak St', city: 'Seattle' },
            },
            {
                id: 4,
                name: 'John',
                age: 44,
                address: { street: '123 Maple Ave', city: 'Dallas' },
            },
            {
                id: 5,
                name: 'Mary',
                age: 13,
                address: { street: '456 Elm St', city: 'Los Angeles' },
            },
            {
                id: 6,
                name: 'James',
                age: 18,
                address: { street: '987 Pine Rd', city: 'Dallas' },
            },
            {
                id: 7,
                name: 'Jennifer',
                age: 21,
                address: { street: '654 Birch Ct', city: 'Seattle' },
            },
            {
                id: 8,
                name: 'Robert',
                age: 4,
                address: { street: '876 Spruce Way', city: 'San Francisco' },
            },
            {
                id: 9,
                name: 'Jessica',
                age: 12,
                address: { street: '543 Willow Dr', city: 'San Francisco' },
            },
            {
                id: 10,
                name: 'Emily',
                age: 55,
                address: { street: '765 Aspen Blvd', city: 'Los Angeles' },
            },
        ],
    };

    const [currentUsers, setCurrentUsers] = useState(users);

    const filterUsers = () => {
        const filteredUsers = users.myFriends.filter(
            (user) => user.address.city === 'Los Angeles'
        );
        setCurrentUsers({ myFriends: filteredUsers });
    };

    return (
        <div id={'hw02'}>
            <UserList2 users={currentUsers} filterUsers={filterUsers} />
        </div>
    );
};
