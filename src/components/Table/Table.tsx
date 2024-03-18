"use client"
import React, { useState } from 'react';
import styles from './Table.module.css';
import { Text } from '@/common/Text/Text';
import Button from '@/common/Button/Button';
import Swal from 'sweetalert2';

const Table = () => {
  // Inicializa un array de estados para controlar la reserva de cada fila
  const [reservations, setReservations] = useState(Array(9).fill(false));

  // Función para cambiar el estado de reserva de una fila específica
  const handleReserve = (index: number) => {
    const updatedReservations = [...reservations];
    updatedReservations[index] = !updatedReservations[index];
    setReservations(updatedReservations);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Reservado!",
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className={styles.container}>
      <Text className={styles.title}>Tabla de departamentos</Text>
      <Text className={styles.subTitle} type='typography-subtitle_minor' variant='p'>
        En esta sección podrás ver los departamentos que se van a mostrar en el link a compartir del workshop
      </Text>
      <div className={styles["div-data-table"]}>
        <table className={styles["data-table"]}>
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>AREA M2</th>
              <th>DORM</th>
              <th>BAÑO</th>
              <th>V.HIPOTECA</th>
              <th>V.ALQUILER</th>
              <th>PRECIO</th>
              <th>PRECIO DESCUENTO</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Mapea sobre el array de estados y renderiza una fila para cada elemento */}
            {reservations.map((isReserved, index) => (
              <tr key={index} className={isReserved ? styles.reserved : ''}>
                <td>NOMBRE DEL DEPARTAMENTO</td>
                <td>40 M2</td>
                <td>2 D</td>
                <td>2 B</td>
                <td>S/ 1,800</td>
                <td>S/ 1,900</td>
                <td>S/ 280,000</td>
                <td>S/ 280,000</td>
                <td>
                  <Button
                    type={isReserved ? 'reserved' : 'fourth'}
                    size={'small'}
                    onClick={() => handleReserve(index)} // Pasa el índice de la fila al manejar la reserva
                    disabled={isReserved} // Deshabilita el botón si la fila está reservada
                  >
                    {isReserved ? 'Reservado' : 'Reservar'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
