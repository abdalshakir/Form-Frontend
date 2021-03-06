const responseDiv = document.getElementById("response-div");

const getUsers = () => {
    const URL = "https://form-crud-operation-abdal.herokuapp.com/users";

    axios.get(URL).then((response) => {
        const users = response.data;
        console.log(users);

        if (response.data.length === 0) {
            responseDiv.innerHTML = "No Users";
        } else {
            const usersList = users.map((user) => {
                return `<tr><td>${user.name}</td><td>${user.email}</td><td>${user.address}</td></tr>`;
            });

            const resultDiv = document.getElementById("result-div");

            resultDiv.innerHTML = ""

            resultDiv.innerHTML = usersList.join("");
        }
    });
};

const addUser = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const addUserURL = "https://form-crud-operation-abdal.herokuapp.com/user";

    if (name === "" || email === "" || address === "") {
        alert("Please Fill All the Fields");
    } else {
        const userData = {
            name: name,
            email: email,
            address: address,
        };

        axios.post(addUserURL, userData).then((response) => {
            alert(`${userData.name} is Added`);
            getUsers();
        });
    }
};

function updateUser() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const updateUserURL = "https://form-crud-operation-abdal.herokuapp.com/user";

    if (name === "" || email === "" || address === "") {
        alert("Please Fill All the Fields");
    } else {
        const userData = {
            name: name,
            email: email,
            address: address,
        };

        axios.put(updateUserURL, userData).then((response) => {
            //   alert("User Updated");
            responseDiv.innerHTML = "User Updated";
            location.reload();
        });
    }

}