function Alert(props) {
  return (
    <div>
      <span style={{ color: "red" }}>{props.children}</span>
    </div>
  );
}

export default Alert;
