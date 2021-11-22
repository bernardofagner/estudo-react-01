import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Home.module.scss';

const Home: React.FC = () => {

    const { homeState } = useSelector((state) => state.homeRedux);
    const dispatch = useDispatch();


    const textox = [
        '(Texto de destaque): Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, placeat dignissimos fuga modi quia dolorum unde enim nostrum esse odio vel facilis commodi obcaecati optio maiores error debitis at quibusdam.',
        '(Texto na íntegra): Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sequi facilis aspernatur cumque eveniet voluptates. Atque aspernatur delectus expedita maiores, recusandae animi ab, accusantium possimus eius beatae architecto inventore ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sequi facilis aspernatur cumque eveniet voluptates. Atque aspernatur delectus expedita maiores, recusandae animi ab, accusantium possimus eius beatae architecto inventore ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sequi facilis aspernatur cumque eveniet voluptates. Atque aspernatur delectus expedita maiores, recusandae animi ab, accusantium possimus eius beatae architecto inventore ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sequi facilis.',
        'animi ab, accusantium possimus eius beatae architecto inventore ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sequi facilis aspernatur cumque eveniet voluptates. Atque aspernatur delectus expedita maiores, recusandae animi ab, accusantium possimus eius beatae architecto inventore ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sequi facilis aspernatur cumque eveniet voluptates. Atque aspernatur delectus expedita maiores, recusandae animi ab, accusantium possimus eius beatae architecto inventore ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sequi facilis aspernatur cumque eveniet voluptates. Atque aspernatur delectus expedita maiores, recusandae animi ab, accusantium possimus eius beatae architecto inventore ipsa!'
    ];

    return (

        <div className={styles['container']}>

            <h1 className={styles['titulo']}>
                Título da página
            </h1>

            <div className={styles['container-texto']}>
                {textox.map((linha, i) => {
                    return <p className={styles['texto']} key={i}>{linha}</p>
                })}

            </div>

            <div>
                <p>
                    Contador {homeState.contador}.
                </p>
            </div>


        </div>
    );
};

export { Home };