const somenthingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve(':D');
        } else {
            reject('D:');
        }
    }); 
};

somenthingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(err));



const somenthingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve(':D 2')
            }, 2000)
        } else {
            const error = new Error('D:')
            reject(error);
        }
    }) 
}

somenthingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))


Promise.all([somenthingWillHappen(), somenthingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })

