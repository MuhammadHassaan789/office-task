const readline = require('readline');

function createPools(users) {
    const pools = {};

    users.forEach(user => {
        const key = user.key;
        if (!pools[key]) {
            pools[key] = [];
        }
        pools[key].push(user);
    });

    return pools;
}

function getUserInput(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let users = [];

    const askUser = () => {
        rl.question('Enter user details in the format name:key (or type "done" to finish): ', (answer) => {
            if (answer.toLowerCase() === 'done') {
                const pools = createPools(users);
                callback(pools);
                rl.close();
                return;
            }

            const [name, key] = answer.split(':');
            if (name && key) {
                users.push({ name, key });
            } else {
                console.log('Invalid input. Please enter in the format name:key.');
            }

            askUser();
        });
    };

    askUser();
}

function handleResult(pools) {
    console.log('User Pools:', JSON.stringify(pools, null, 2));
}

getUserInput(handleResult);
