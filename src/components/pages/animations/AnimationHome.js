import { useState } from 'react';
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl';
import Iphone1 from '../../../img/Black iPhone 15 PNG.png';
import Iphone2 from '../../../img/Blue iPhone 15 PNG.png';
import Iphone3 from '../../../img/Green iPhone 15 PNG.png';
import Iphone4 from '../../../img/Yellow iPhone 15 PNG.png';
import styles from './Animation.module.scss';

const AnimationHome = () => {
    const [active, setActive] = useState(0);

    const items = [Iphone1, Iphone2, Iphone3, Iphone4];
    const firstPosition = 0;
    const lastPosition = items.length - 1;

    const updateActiveItem = () => {
        document.documentElement.style.setProperty('--calculation', active);
    };

    const moveSlider = (direction) => {
        let newActive;

        if (direction === 1) {
            newActive = active + 1 > lastPosition ? firstPosition : active + 1;
        } else if (direction === -1) {
            newActive = active - 1 < firstPosition ? lastPosition : active - 1;
        }

        setActive(newActive);
        updateActiveItem();
    };

    useState(() => {
        updateActiveItem();
    }, [active]);

    return (
        <section className={styles.container}>
            <SlArrowLeftCircle
                size='35px'
                className={styles.leftArrow}
                cursor='pointer'
                color='white'
                onClick={() => moveSlider(-1)}
            />

            <div className={styles.list}>

                <div className={`${styles.item} ${active === 0 ? styles.active : ''}`}>
                    <div className={styles['iphone-img']}>
                        <img src={items[active]} alt="iPhone" />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.cellInformation}>Produto Novo</p>
                        <h2>Iphone 15 {['Black', 'Blue', 'Green', 'Yellow'][active]}</h2>
                        <p className={styles.description}>
                            Display: 6,1 polegadas
                            Processador: A15 Bionic
                            Memória: 6GB
                            Armazenamento: 128GB, 256GB ou 512GB
                            Bateria: 3279 mAh
                            Câmera frontal: 12MP (f/1.9)
                            Gravação de vídeo: em 4K a 24 fps, 25 fps, 30 fps ou 60 fps; 1080p a 25 fps, 30 fps ou 60 fps; 720p a 30 fps
                        </p>
                        <button className={styles.more}>Saiba Mais</button>
                    </div>
                </div>
            </div>

            <SlArrowRightCircle
                size='35px'
                className={styles.rightArrow}
                cursor='pointer'
                color='white'
                onClick={() => moveSlider(1)}
            />
        </section>

    );
};

export default AnimationHome;
