import React from "react";
import  {connect}  from "react-redux";
import { Link } from "react-router-dom";

const Table = (props) => {

      
  const putRows = () => (
    props.usuarios.map((usuario, key)=>(
    <tr key={usuario.id}>
      <td>
        {usuario.name}
      </td>
      <td>
        {usuario.email}
      </td>
      <td>
        {usuario.website}
      </td>
      <td>
        <Link to={`/publications/${key}`}>
        <div className="eye-solid icon"></div>
        </Link>
      </td>
    </tr>))
  );

  return (
    <div>
      <table className="tabla">
        <thead>
          <tr>
            <th>Imię</th>
            <th>e-mail</th>
            <th>link</th>
          </tr>
        </thead>
        <tbody>{putRows()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
}

export default connect(mapStateToProps)(Table);
