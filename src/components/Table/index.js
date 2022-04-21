function Table(props) {
    const { index, kota, kasus, sembuh, dirawat, meninggal } = props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{kota}</td>
        <td>{kasus}</td>
        <td>{sembuh}</td>
        <td>{dirawat}</td>
        <td>{meninggal}</td>
      </tr>
    );
}

export default Table;