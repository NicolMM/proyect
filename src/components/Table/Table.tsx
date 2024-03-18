import React from 'react';
import styles from './Table.module.css';
import { Text } from '@/common/Text/Text';
import Button from '@/common/Button/Button';

const TableRow = () => (
  <tr>
    <td>NOMBRE DEL DEPARTAMENTO</td>
    <td>40 M2</td>
    <td>2 D</td>
    <td>2 B</td>
    <td>S/ 1,800</td>
    <td>S/ 1,900</td>
    <td>S/ 280,000</td>
    <td>S/ 280,000</td>
    <td><Button type={'fourth'} size={'small'}>SEPARAR</Button></td>
  </tr>
);

const Table = () => {
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
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
