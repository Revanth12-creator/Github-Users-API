let GitHub_API="https://api.github.com/users";

window.fetch(GitHub_API)
.then((data) => 
    data
    .json()
    .then((users) => {
        let output=[];
        for(let user of users){
            console.log(user)
            output +=`
            <div class="List">
            <img src="${user.avatar_url}">
            <h1>${user.login}</h1>
            </div>   
            `}
        document.getElementById("UserList").innerHTML=output;
    })
    .catch(err => {
        console.log(err);
    })
    )
.catch(err => console.log(err));


{/* <h1>${user.avatar_url}</h1> */}
