import React from 'react'

// images
import Wallet from '../assets/img/wallet.png'
import Money from '../assets/img/money.png'
import Add from '../assets/img/add.png'
import Sell from '../assets/img/sell.png'

// icons
import { BsArrowRightShort } from 'react-icons/bs'

function OwnNFT() {
  return (
    <section className="own">
        <div className="content">
            <div className="text-container">
                <div className="title">Crie e Venda Suas NFTs</div>
                <div className="subtitle">O processo de criação de um NFT pode custar menos de um dólar, mas o processo de venda pode custar até mil dólares. Por exemplo, Allen Gannett, um desenvolvedor de software.</div>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={Wallet} alt="" />
                    <div className="card-title">Configure sua carteira</div>
                    <div className="card-text">Você tem que escolher se quer usar uma carteira quente ou uma carteira fria.</div>
                    <div className="card-button">consulte Mais informação <BsArrowRightShort/></div>
                </div>
                <div className="card">
                    <img src={Money} alt="" />
                    <div className="card-title">Crie sua coleção</div>
                    <div className="card-text">Crie uma coleção no Opensea e dê a ela uma arte adequada.</div>
                    <div className="card-button">consulte Mais informação <BsArrowRightShort/></div>
                </div>
                <div className="card">
                    <img src={Add} alt="" />
                    <div className="card-title">Adicione seus NFTs</div>
                    <div className="card-text">Vá para o ícone do seu perfil e a página de criação no canto superior direito.</div>
                    <div className="card-button">consulte Mais informação <BsArrowRightShort/></div>
                </div>
                <div className="card">
                    <img src={Sell} alt="" />
                    <div className="card-title">Venda suas NFTs</div>
                    <div className="card-text">Crie uma coleção no Opensea e dê Adicionar itens e arte.</div>
                    <div className="card-button">consulte Mais informação <BsArrowRightShort/></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OwnNFT