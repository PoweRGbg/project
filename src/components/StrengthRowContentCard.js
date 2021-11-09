import { useState } from 'react';

export default function HeroStrengthRow(props) {
    let [hero, setHero] = useState(props.hero);



    const addStrengthButtonClickHandler = () => {
        hero.strength +=1;
        hero.skillPointsAvailable -=1;
        setHero(hero);
        handleChange(hero);
        console.log('hero in tow is '+ JSON.stringify(hero));
    };

    function handleChange(hero) {
        props.onHeroChange(hero);
    }
    return <tr style={{
        'background-color': '#54657d',
        color: '#fff',
        border: 0
    }}>
        <td>Strength</td>
        <td onChange={handleChange}>{props.hero.strength}</td>
        <td >{(hero.skillPointsAvailable > 0) && <button  
        className=" btn-primary text-uppercase" 
        onClick={() => {
            if (hero.skillPointsAvailable) {
                addStrengthButtonClickHandler();
            }

        }

        }>+</button>
            }
        </td>
    </tr>;
}