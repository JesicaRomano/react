//rafce


const Saludo = ({name, lastname, age, action}) => {
    
    const title= {
        border: 'solid blue 2px',
        margin: '20px',
        padding: '20px'
    }
    action()

    return (
        <div style={title}>
            <div>Saludos {name} {lastname}</div>
            <div>Tienes {age} años</div>
            <button onClick= {action}>Click</button>
        </div>
    )
}

export default Saludo
