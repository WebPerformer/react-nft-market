import React from 'react'

// images
import Metamask from '../assets/img/metamask.png'
import Coinbase from '../assets/img/coinbase.png'
import Binance from '../assets/img/binance.png'

function Wallet() {
  return (
    <section className="wallet">
        <div className="content">
            <div className="text-container">
                <h1 className="title">Conectar ao Mercado NFT</h1>
                <p className="subtitle">Um NFT é uma únidade de dados não intercambiável armazenada em uma blockchain, um tipo de registro dígital, que pode ser vendida ou negociada.</p>
            </div>
            <div className="wallet-cards">
                <div className="card">
                    <div className="icon">
                        <img src={Metamask} alt="" />
                    </div>
                    <div className="card-title">
                        <h5>Metamask</h5>
                    </div>
                    <div className="card-description">
                        <p>MetaMask é uma carteira de criptomoeda popular conhecida por sua facilidade de uso e disponibilidade no Windows e MAC</p>
                    </div>
                    <button className="card-btn">Conectar Carteira</button>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={Coinbase} alt="" />
                    </div>
                    <div className="card-title">
                        <h5>Metamask</h5>
                    </div>
                    <div className="card-description">
                        <p>MetaMask é uma carteira de criptomoeda popular conhecida por sua facilidade de uso e disponibilidade no Windows e MAC</p>
                    </div>
                    <button className="card-btn selected">Mudar Carteira</button>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={Binance} alt="" />
                    </div>
                    <div className="card-title">
                        <h5>Metamask</h5>
                    </div>
                    <div className="card-description">
                        <p>MetaMask é uma carteira de criptomoeda popular conhecida por sua facilidade de uso e disponibilidade no Windows e MAC</p>
                    </div>
                    <button className="card-btn">Conectar Carteira</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Wallet