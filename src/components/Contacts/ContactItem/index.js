import React from 'react';

export const ContactItem = (props) => {
  return (
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.surname}</td>
        <td>{props.phone}</td>
      </tr>
  );
}

export const ContactSpinner = (props) => {
  return (
      <tr>
        <td colSpan={4}>
          <span className="spinner-border d-flex mx-auto"/>
        </td>
      </tr>
  )
}

export const ContactEmpty = () => {
  return (
      <tr>
        <td colSpan={4}>
          <div className="text-center">Ни каких контактов пока не добавленно!</div>
        </td>
      </tr>
  );
}

export const ContactError = (props) => {
  return (
      <tr>
        <td colSpan={4}>
          <div className="alert alert-danger text-center" role="alert">
            {props.error}
          </div>
        </td>
      </tr>
  );
}