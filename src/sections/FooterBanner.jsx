import React from 'react'

function FooterBanner() {
  return (
    <section className="footer-banner">
        <div className="bg-overlay"></div>
        <div className="content">
            <div className="banner">
                <div className="left">Crie e Venda Seus NFTs</div>
                <div className="right">
                    <button className="create">Criar NFT</button>
                    <button className="discover">Descubra mais</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterBanner