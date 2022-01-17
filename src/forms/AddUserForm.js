const AddUserForm = (props) => {

    let user = {};

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        user = { ...user, [name]: value };
        // console.log(user);
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!user.name || !user.username) return;

                props.addUser(user);
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Add</button>
            <button onClick={() => props.setAdding(false)} className="button muted-button">Cancel</button>
        </form>
    );
}

export default AddUserForm