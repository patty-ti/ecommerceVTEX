import styled from 'styled-components';

export const Container = styled.div`
    width: auto;    
    margin: auto;

    .nav{
        display: flex;
        align-items: center;
        padding: 12px;
        margin: auto;
        justify-content: space-between;
        background-color: yellow;
        background-attachment: fixed;
    }

    .login{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .login a {
        color: black;
        text-decoration: none;
        font-style: italic;
        font-family: 'Courier New', Courier, monospace;
        padding: 1rem;
    }
    .login a:hover {
        color: #ff8000;
    }

    .shopcart{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .shopcart a:hover{
        color: red;
    }
    .categories{
        display: flex;
        align-items: center;
        padding: 12px;
        margin: auto;
        justify-content: space-between;
        background-color: black;
        color: white;
    }
    .categories a {
        color: white;
        text-decoration: none;
        font-style: italic;
        font-family: 'Courier New', Courier, monospace;
        padding: 1rem;
    }
    .categories a:hover {
        color: yellow;
    }

    .carousel {   
        height: auto;         
        display: auto;
        margin: auto;
        justify-content: center;
        flex-direction: center;
        align-items: center;
        max-height: 150px;
        position: relative;


    }
    .carousel img {
        opacity: 0;
        width: 80%;
        max-width: 500px;
        height: 25vw;
        position: absolut;
        object-fit: cover;
        transition: opacity 600ms;
    }
    .carousel img.selcted {
        opacity: 1;
    }

    .products{
        height: 100vh;
        width: 100%;
        background: white;
        display: flex;
        justify-content: space-around;
    }

    .product-content{
        display: grid;
        text-align: center;
        height: 300px;
        background: white;
        border-radius: 12px;
        padding: 12px;
        margin: 12px;
    }   
    .grid-container{
        height: auto;
        width: auto;
        display: flex;
        margin: 0%;
        padding: 1.5%;        
        align-items: center;
        justify-content: space-between;
        background-color:#565656;
    }
    .frete .seguro .atend .pag{
        display: grid;
        align-items: center;
        justify-content: space-between;
        padding: 0%;
        border-radius: 10px;
        border-color: white;

    }
    .section-two{
        width: 100vw;
        height: auto;
        background-color: gray;
        display: flex;
        justify-content: space-between;
    }
    .footer{
    width:100vw;
    height: auto;
    padding: 25px;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-position:center center;
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-size: contain;
    font-style: italic;
    font-family: 'Courier New', Courier, monospace;
    }

    .footer img{
    height:30px;
    width:30px;
    }
    .footer{
        width: 95vw;
        background-color: yellow;
    }
    
`
