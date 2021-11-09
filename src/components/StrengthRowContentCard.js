import { useState } from 'react';

export default function HeroStrengthRow(props) {
    let [strength, setStrength] = useState(1);
    let [lastAction, setLastAction] = useState(Date.now());



    const addStrengthButtonClickHandler = () => {
        setStrength(strength + 1);
        handleChange(strength+1);
        props.hero.strength = strength+1;
    };

    function handleChange(strengthValue) {
        console.log(`logged change inside - ` + strengthValue);
        props.onHeroChange(strengthValue);
    }

    return <tr>
        <td>Strength</td>
        <td onChange={handleChange}>{strength}</td>
        <td>{(lastAction <= Date.now()) && <button onClick={() => {
            if (lastAction < Date.now()) {
                addStrengthButtonClickHandler();
                handleChange(props.hero.strength);
                setLastAction(Date.now() + 10000); // add 10 seconds wait
            }

        }

        }>+</button>
        }
        </td>
    </tr>;
}