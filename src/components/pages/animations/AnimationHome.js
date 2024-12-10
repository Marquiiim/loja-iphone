import { useState } from 'react';
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl';
import Iphone1 from '../../../img/BlackiPhone.png';
import Iphone2 from '../../../img/BlueiPhone.png';
import Iphone3 from '../../../img/GreeniPhone.png';
import Iphone4 from '../../../img/YellowiPhone.png';
import styles from './Structure.module.scss';

const AnimationHome = () => {

    const catalog = [Iphone1, Iphone2, Iphone3, Iphone4]
    const [next, setNext] = useState(0)
    const [prev, sePrev] = useState(0)


    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <button className={styles.button_prev}>
                    <SlArrowLeftCircle size='40' />
                </button>
                <figure className={styles.catalog_image}>
                    <img src={Iphone1} alt='Iphone' />
                </figure>
                <button className={styles.button_next}>
                    <SlArrowRightCircle size='40' />
                </button>
                <div className={styles.informations_and_more}>
                    <p className={styles.description_product}>
                        Display: 6,1 polegadas
                        Processador: A15 Bionic
                        Memória: 6GB
                        Armazenamento: 128GB, 256GB ou 512GB
                        Bateria: 3279 mAh
                        Câmera frontal: 12MP (f/1.9)
                        Gravação de vídeo: em 4K a 24 fps, 25 fps, 30 fps ou 60 fps; 1080p a 25 fps, 30 fps ou 60 fps;
                        720p a 30 fps
                    </p>
                    <button className={styles.more}>Saiba Mais</button>
                </div>
            </div>
        </section>
    );
};

export default AnimationHome;
