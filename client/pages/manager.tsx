import React from 'react';

const Manager = ({todos}) => {
    return (
        <div>
            managerPages
            {todos.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    );
};

export default Manager;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();

    return {
        props: {
            todos,
        },
    };
};