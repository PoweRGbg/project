import '../css/herostyle.css';
import { useState } from 'react';
import StrengthRow from './StrengthRowContentCard';
export default function ContentCard(props) {
    let [hero, setHero] = useState(props.hero);
    let [goblin, setGoblin] = useState(initialGoblin());
    // let [gold, setGold] = useState(0);
    let [lastAction, setLastAction] = useState(Date.now());

    const forceUpdate = useForceUpdate();

    // Get state from strength
    function handleStrengthChange(strengthValue) {
        console.log('Strength is now ' + strengthValue);
        hero.strength = strengthValue;
        setHero(hero);
    }


    function initialGoblin() {
        let goblin = {
            health: props.hero.maxHealth,
            xp: props.hero.maxHealth,
            level: props.hero.level,
            damage: 1,
            gold: Math.floor(Math.random() * props.hero.maxHealth)
        }
        return goblin;
    }



    const addGoldButtonClickHandler = (howMuch) => {
        if (howMuch) {
            hero.gold += howMuch;
        } else {
            hero.gold += (Math.floor(Math.random() * 10) + 1);
        }
        setHero(hero);
        props.hero.gold = hero.gold;
        forceUpdate();
    };

    function fightGoblinButtonClick() {
        if(Date.now() <= lastAction){
            console.log("Wait some more " + (Date.now() - lastAction));
            forceUpdate();
            return;
        }
        console.log(goblin);
        goblin.health -= hero.strength;
        if (goblin.health <= 0) {
            console.log('Killed goblin! Getting ' + goblin.gold + ' gold and ' + goblin.xp + ' xp');
            setGoblin(initialGoblin());
            hero.gold += goblin.gold;
            setHero(hero);
            props.hero.gold = hero.gold;
            setLastAction(Date.now() + 10000);
            forceUpdate();
        } else {
            console.log('Goblin (' + goblin.damage + ')left with  ' + goblin.health + ' life after ' + hero.strength + ' damage');
            setGoblin(goblin);
            hero.health -= goblin.damage;
            setHero(hero);
            console.log('Goblin retaliates and leaves you with ' + props.hero.health);
            forceUpdate()
        }
    };

    function healButtonClick() {
        // we have enough gold for full heal
        if (props.hero.gold >= (props.hero.maxHealth - props.hero.health)) {
            console.log('Full healed for ' + (hero.maxHealth - hero.health) + ' gold');
            hero.gold -= (hero.maxHealth - hero.health)
            props.hero.health = props.hero.maxHealth;
            setHero(hero);
            forceUpdate();
        } else {
            console.log('Not enough gold!');
        }
    };

    //create your forceUpdate hook
    function useForceUpdate() {
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update the state to force render
    }




    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
                <h2 className="tm-block-title">{props.title}</h2>
                <h3>{props.hero?.name}</h3>
                <table className="Hero">

                    <StrengthRow hero={hero} onHeroChange={handleStrengthChange} />
                    <tr>
                        <td>Life</td>
                        <td>{hero.health}</td>
                        <td>{(hero.maxHealth - hero.health) < hero.gold && (hero.maxHealth - hero.health) > 0 &&
                            <button className="btn btn-primary btn-block text-uppercase" onClick={() => {
                                //add random gold 
                                healButtonClick();
                            }}
                            >Heal for {hero.maxHealth - hero.health} gold</button>}
                        </td>
                    </tr>
                    <tr>
                        <td>Gold</td>
                        <td>{hero.gold}</td>
                    </tr>
                    <tr>

                        <td>
                             <button className="btn btn-primary btn-block text-uppercase" onClick={() => {
                                //add random gold 
                                fightGoblinButtonClick();

                            }}>{(Date.now() >= lastAction)?`Fight goblin!(${goblin.health})`:"Wait!"}</button>
                        </td>

                    </tr>
                </table>
            </div>
        </div>
    );
}

function waitRow(seconds) {
    return (
        <tr><td>Please wait {seconds}sec more!</td></tr>
    );
}