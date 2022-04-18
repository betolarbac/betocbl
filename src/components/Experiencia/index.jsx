import styles from './styles.module.scss';

export function Experiencia() {
    return (
        <div className={styles.container}>
            <h1>EXPERIÊNCIA</h1>
            
            <div className={styles.container2}>
             <h4>AMARÉ PUBLICIDADE E MARKETING</h4>
             <h2>Desenvolvedor Front-end</h2>
             <h5>Jan - 2022</h5>
            </div>

            <div className={styles.container3}>
             <h5>Amaré Publicidade e Marketing</h5>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                 elit. Quisque eu purus risus. Ut rutrum sollicitudin 
                 purus in accumsan. Proin at mattis metus. Nullam sit 
                 amet mauris condimentum, volutpat augue in, mattis urna.</p>
            </div>
        </div>
    )
}