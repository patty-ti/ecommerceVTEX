import React, { useState, useEffect } from 'react';
import Cart from '../../assets/cart.png';
import Capa from '../../assets/capa.jpg';
import Logo from '../../assets/logo.png';
import Frete from '../../assets/frete.png';
import Atend from '../../assets/atend.png';
import Seguro from '../../assets/seg.png';
import Pag from '../../assets/cartoes.png';
import Insta from '../../assets/insta.png';
import GitHub from '../../assets/git.png';
import Linkedin from '../../assets/linke.png';

import { Container } from './style';

import api from '../../services/api';

interface IProduct{ 
    id: number;
    name: string;
    photo: string;
    description: string;
    price: number;
}


const Home: React.FC = () => {
    const [ data, setData ] = useState<IProduct[]>([]);
    const [ cart, setCart ] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    const handleCart = (index: number) => {
        let push: any = [ ...cart, cart.push(data[index])]
        setCart(push)
        const productStore = JSON.stringify(cart);
        localStorage.setItem(`@Produto-${index}`, productStore )
    }

    let time = 2000,
        currentImageIndex = 0,
        images = document
            .querySelectorAll("carousel img")
        max = images.length;

    function nextImage() {
        images[currentImageIndex]
            .classList.remove("selected")

        currentImageIndex++

        if (currentImageIndex >= max)
            currentImageIndex = 0

        images[currentImageIndex]
            .classList.add("selected")
    }
    
    function start() {
        setInterval(() => {
            nextImage()
        }, time)
    }
    window.addEventListener("load", start)
    
    return (
    <Container>
        <div className="nav">
            <div>
                <img src={Logo} alt="logo" width="50px" height="auto"/>
            </div>
            <div className="login">
                <a href="login.html" target="_blank">Entrar/Cadastrar</a>
            </div>
            <div className="shopcart">
                <img src={Cart} alt="cart" width="50px" height="auto" />
                <span> ( {cart.length} )</span>
            </div>            
        </div>

        <nav className="categories">
            <div className="jogos">
                <a href="jogos.html">GAMES</a>
            </div>
            <div className="consoles">
                <a href="consoles.html">CONSOLES</a>
            </div>
            <div className="pcgamer">
                <a href="pcgamer.html">PCs GAMER</a>
            </div>
            <div className="acessorios">
                <a href="acessorios.html">ACESSÓRIOS</a>
            </div>
        </nav>
        
        <section className="carousel">
            <div className="selected">
                <div><img src={Capa} alt="capa" /></div>
                <div><img src={Capa} alt="capa" /></div>
                <div><img src={Capa} alt="capa" /></div>
                <div><img src={Capa} alt="capa" /></div>
                <div><img src={Capa} alt="capa" /></div>
            </div>
        </section>

        <aside className="grid-container">
            <div className="frete">
                <img src={Frete} alt="frete" width="50px" />
                <p>Frete Gratis</p> 
            </div>
            <div className="seguro">
                <img src={Seguro} alt="seguro" width="100px" />
            </div>
            <div className="atend">
                <img src={Atend} alt="atend" width="60px" />
            </div>
            <div className="pag">
                <img src={Pag} alt="pag" width="210px" />
            </div>
        </aside>

        <section className="products">
            { data.map( (prod, index) => (
                <div className="product-content" key={prod.id}>
                    <img src={prod.photo} alt="Headset" width="200" height="auto" />
                    <h4>{prod.name}</h4>
                    <span>{prod.description}</span>
                    <h6>R${prod.price}</h6>
                    <button onClick={ () => handleCart(index)}>Adicionar ao carrinho</button>
                </div>
            ))}            
        </section>

        <footer className="footer">
            <div>
                <p>&copy; Desenvolvido por Patty Rodrigues</p>
                <p>E-commerce criada para o Programa Hiring Coders - Gama Academy-VTEX</p>
            </div>
            <div>
                <a href="https://www.instagram.com/patty.rodriguess"><img src={Insta} alt="instagram"  width="60px" height="60px" ></img></a>
                <a href="https://github.com/patty-ti"><img src={GitHub} alt="github"  width="60px" height="60px" ></img></a>
                <a href="https://www.linkedin.com/in/patriciarodriguessilvaprs/"><img src={Linkedin} alt="linkedin"  width="60px" height="60px" ></img></a>
            </div>
        </footer>
        
        
    </Container>    
            );
    }

export default Home;