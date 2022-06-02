function ActionLink() {
    function handleClick(e) {
        console.log(e);
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="https://www.google.com.vn/" onClick={handleClick}>
            Click me!
        </a>
    );
}

export default ActionLink