/* 1. Cree un nuevo archivo llamado `Form.jsx`
2. Dentro de `Form.jsx`, defina un nuevo componente funcional llamado `Form`
3. Utilice el estado del componente para realizar un seguimiento de los valores de los campos del formulario (nombre, apellido y correo electrónico)
4. Agregue un botón para enviar el formulario.
5. Muestre los valores del formulario en el mismo componente, debajo del botón */

import { useState } from "react";

export function Form() {
  const [user, setUser] = useState(undefined);
  function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("nombre"),
      apellido: formData.get("apellido"),
      email: formData.get("email"),
    };
    setUser(data);
  }

  return (
    <form onSubmit={submit}>
      <input name="nombre" type="text" />
      <input name="apellido" type="text" />
      <input name="email" type="text" />
      <button type="submit">Submit</button>
      {user && (
        <>
          <p>{user.name}</p>
          <p>{user.apellido}</p>
          <p>{user.email}</p>
        </>
      )}
    </form>
  );
}
