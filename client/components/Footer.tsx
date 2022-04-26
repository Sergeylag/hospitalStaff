// import styled from "styled-components";
import {Basement} from '../styles/footer_styles/footer-styles';
import Link from "next/link";
import logo from '../public/img/logo-mini.svg'
import Image from 'next/image'

const Footer = () => {
    return (
        <Basement>
            <div className='content-wrapper'>
                <figure className='logo'>
                    <Link href={`/`}>
                        <a>
                            <Image alt='Городская клиническая больница им. С.И. Спасокукоцкого'
                                 src={logo.src} width={logo.height} height={logo.width}/>
                        </a>
                    </Link>
                    <figcaption className='copyright'>
                        © 2021 ГБУЗ города Москвы
                        <br/>
                        «Городская клиническая больница имени С.И. Спасокукоцкого Департамента здравоохранения города Москвы»
                    </figcaption>
                </figure>
                <div>
                    <p className='address'>127206, Москва, ул. Вучетича, 21</p>
                    <p className='chief'>
                        Главный врач ГКБ им. С. И. Спасокукоцкого —
                        <em>Погонин Алексей Владимирочич</em>
                    </p>
                </div>
                <div className='search'>
                    <p className='phone'>
                    </p>
                </div>
            </div>
        </Basement>
    );
};

export default Footer;