import { useState } from 'react';
import { Link } from 'react-router-dom'
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl';
import Iphone1 from '../../../img/BlackiPhone.png';
import Iphone2 from '../../../img/BlueiPhone.png';
import Iphone3 from '../../../img/GreeniPhone.png';
import Iphone4 from '../../../img/YellowiPhone.png';
import styles from './Structure.module.css';

const AnimationHome = () => {

    const catalog = [Iphone1, Iphone2, Iphone3, Iphone4]
    const [index, setIndex] = useState(0)
    const [phoneAnimation, setPhoneAnimation] = useState('active')
    const [descriptionMore, setDescriptionMore] = useState('desc_active')

    const resetAnimation = () => {
        setPhoneAnimation('reset');
        setDescriptionMore('desc_reset');

        setTimeout(() => {
            setPhoneAnimation('active');
            setDescriptionMore('desc_active');
        }, 30);
    };

    function nextPhoto() {
        setPhoneAnimation('active')
        setDescriptionMore('desc_active')

        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % catalog.length)
            resetAnimation()
        }, 250)
    }

    function prevPhoto() {
        setPhoneAnimation('inactive')
        setDescriptionMore('desc_inactive')

        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex - 1 + catalog.length) % catalog.length)
            resetAnimation()
        }, 250)
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <button className={styles.button_prev}>
                    <SlArrowLeftCircle size='40' onClick={prevPhoto} />
                </button>
                <figure className={styles.catalog_image}>
                    <img src={catalog[index]}
                        alt='Catalog'
                        className={`${styles.phones} ${styles[phoneAnimation]}`} />
                </figure>
                <button className={styles.button_next}>
                    <SlArrowRightCircle size='40' onClick={nextPhoto} />
                </button>
                <div className={styles.informations_and_more}>
                    <p className={`${styles.description_product} ${styles[descriptionMore]}`}>
                        Display: 6,1 polegadas
                        Processador: A15 Bionic
                        Memória: 6GB
                        Armazenamento: 128GB, 256GB ou 512GB
                        Bateria: 3279 mAh
                        Câmera frontal: 12MP (f/1.9)
                        Gravação de vídeo: em 4K a 24 fps, 25 fps, 30 fps ou 60 fps; 1080p a 25 fps, 30 fps ou 60 fps;
                        720p a 30 fps
                    </p>
                    <Link to='/catalog_home'>
                        <button className={`${styles.more} ${styles[descriptionMore]}`}>Saiba Mais</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AnimationHome;
