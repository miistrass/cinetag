import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";

function Favoritos() {
    return(
        <>
        <Banner imagem='favoritos'/>
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='Gato Lunático' capa='https://cdn.icon-icons.com/icons2/2248/PNG/512/cat_icon_138789.png' />
            </section>
        
        </>
    )
}

export default Favoritos;