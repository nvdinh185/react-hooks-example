function ActionLink() {
    function handleClick(e) {
        console.log(e);
        e.preventDefault();
        console.log('The link was clicked2.');
    }

    return (
        <a href="https://www.google.com.vn/" onClick={(e) => handleClick(e)}>
            Click me!
        </a>
    );
}

export default ActionLink