const TemperatureInput = (props) => {

  const changeValue = (e) => {
    props.onChangeValue(e.target.value);
  }

  return (
    <>
      <input value={props.value} onChange={changeValue} />
    </>
  );
}

export default TemperatureInput