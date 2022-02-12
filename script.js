fetch("https://randomuser.me/api")
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
