import React, { Component } from 'react'
import '../public/css/estilo.css'

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      busqueda: ''
    };
  }

  onSubmit (e) {
    console.log(this.state);
    e.preventDefault();
   
  }

  onChange (e) {

    console.log(e.target.value)
    this.setState({
      busqueda: e.target.value
    })

  }

    render() {
        return (
            <div className="container">
          <nav className="nav-login">
              <a href="/members/account-member" className="col text-center">Brand Login</a>
              <a href="/users/signin" className="col text-center">User Login</a>
              <a href="/users/signup" className="col text-center">Create an Account</a>
          </nav>
       
 
              <div className="span1 nav-bar">
                <a className="navlist">servicios</a>
              </div>
              <div className="span2 nav-bar">
                <a className="navlist" href="./contact">contacto</a>
              </div>
              <div className="span3">
                <img src='/img/Favicon.png' alt="Logo de la marca" className="imagen-logo" width="50%" height="50%"/>
              </div>
              <div className="span4 nav-bar">
                <a className="navlist" href="./products">comercios</a>
              </div>
              <div className="span5 nav-bar">
                <a className="navlist">comunidad</a>
              </div>
       
        <div className="foto-de-frase global">
          <img src='/img/banner.jpg' alt="imagen de inicio" className="imagen-banner"/>
          <div className="frase">
            Página digital que reúne a compradores y vendedores involucrados con el consumo sustentable
          </div>
        </div>
        <div className="items">
          <div id="texto"> comercios, y mucho más<br />
          Informate de todas las iniciativas que contribuyen al crecimiento sostenible de tu región<br />
        </div>
         <div className="secuencia">
          <div className="item i1 global"><a href="/productByCategory/clothes" className="a-diseño">Ropa y complementos</a></div>
          <div className="item i2 global"><a href="/productByCategory/cosmetic" className="a-diseño">Cosmetica e higiene</a></div>
          <div className="item i3 global"><a href="/productByCategory/recycle" className="a-diseño">Reciclaje</a></div>
          <div className="item i4 global"><a href="/productByCategory/garden" className="a-diseño">Huerta y jardineria</a></div>
          <div className="item i5 global"><a href="/productByCategory/food" className="a-diseño">Alimentos</a></div>
          <div className="item i6 global"><a href="/productByCategory/energy" className="a-diseño">Energia y construccion</a></div>
          <div className="item i7 global"><a href="/productByCategory/home" className="a-diseño">Decoracion y hogar</a></div>
          <div className="item i8 global"><a href="/productByCategory/recreation" className="a-diseño">Recreacion</a></div>
          <div className="item i9 global"><a href="/productByCategory/nonListedCategories" className="a-diseño">Mas categorias</a></div>
        </div>
        </div>
      <div className="search">
        <div className="search-text">Encuentra todos los negocios asociados</div>
          <form className="form" action=""  id="search" onSubmit={this.onSubmit.bind(this)}>
            <input
            type="search"
            name="name"
            id="miBusqueda"
            onChange={this.onChange.bind(this)}
            value={this.state.busqueda}/>
            <button type="submit" className="boton">Buscar</button>
          </form>
      </div>
          <div className="concept">
          <span className="texto-concept" >
              <hr size="7px" color="#000"/>
            <h2>Sistema de recompensa</h2><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a className="button-secondary" href="">Descubrenos</a>
          </span>
          <img src='/img/recompensa.jpg' alt="foto concepto" className="foto-concept"/>
        </div>
        <div className="participa">
            <span className="texto-participa" >
                <hr size="7px" color="#000"/>
              <h2>Se parte de la comunidad</h2><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className="button-secondary" href="">Conoce más</a>
            </span>
            <img src='/img/comunidad.jpg' alt="foto concepto" className="foto-participa"/>
          </div>
       
      <div className="outstaning-blog-post global">
        <div id="post-blog">Posts<br/>
                             del<br/>
                             Blog</div>
        <div className="item-post global">
            <img src='/img/posts.jpg' alt="imagen del post" className="img-post"/>
            <div className="hr-post">
              <hr size="7px" color="#000"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
      </div>
      <div className="links global">
        <ul className="info-imp">
            <li>
              <a href="#">Sobre nosotros</a>
            </li>
            <li>
              <a href="#">links útiles</a>
            </li>
            <li>
              <a href="#">Nuestra compañia</a>
            </li>
            <li>
                <a href="#">sistema de recompensa</a>
            </li>
            <li>
                <a href="#">blog</a>
            </li>
          </ul>
          <span className="pie">
            <img src='/img/logo.png' alt="logo de Grinby" width="15%" height="7%" className="logo-pie"/>
            <div className="icon">
              <span className="flaticon-instagram  "></span>
              <span className="flaticon-boton-de-logo-del-twitter "></span>
              <span className="flaticon-boton-del-logo-de-facebook "></span>
              <span className="flaticon-linkedin  "></span>
            </div>
          </span>
        </div>
      <footer className="footer global">
        <div>Designed by Freepik from www.flaticon.com</div>
      </footer>
      
            </div>
        )
    }
}
