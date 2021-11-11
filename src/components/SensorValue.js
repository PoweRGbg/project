// import { useEffect } from 'react';
 
export default function SensorValue({
    sgv,
    onDelete,
    onClick,
}) {

    return (
        <li onClick={() => onClick(sgv.id)} >
          {sgv.date} - {sgv.sgv}
        </li>
    );
}