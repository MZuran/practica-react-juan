const styles = {
    cardContainer: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        width: '250px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
    info: {
        marginTop: '12px',
    },
};

export function TarjetaParcial({ nombre, especie, imagen }) {
    return (<>
        <div style={styles.cardContainer}>
            <img src={imagen} alt={nombre} style={styles.image} />
            <div style={styles.info}>
                <h2>{nombre}</h2>
                <p>{especie}</p>
            </div>
        </div>
    </>)
}