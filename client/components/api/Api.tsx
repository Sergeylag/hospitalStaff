import React, {useState, useEffect} from 'react';

const Api = () => {
    const [merchants, setMerchants] = useState('');
    useEffect(() => {
        getMerchant();
    }, []);

    function getMerchant() {
        fetch('http://localhost:3001')
            .then(response => {
                return response.text();
            })
            .then((data) => {
                setMerchants(data);
                console.log(data)
            });
    }

    function createMerchant() {
        let id = prompt('Enter merchant id');
        let name = prompt('Enter merchant name');
        let role = prompt('Enter merchant role');
        fetch('http://localhost:3001/merchants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id, name, role}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            });
    }

    function deleteMerchant() {
        let id = prompt('Enter merchant id');
        fetch(`http://localhost:3001/merchants/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            });
    }

    return (
        <div>
            {merchants ? merchants : 'There is no merchant data available'}
            <br/>
                <button onClick={createMerchant}>Add merchant</button>
                <br/>
                    <button onClick={deleteMerchant}>Delete merchant</button>
        </div>
    );
};

export default Api;