import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Système de gestion des salariés</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>ajouter un salarié</button>
            </div>
        </header>
    )
}

export default Header