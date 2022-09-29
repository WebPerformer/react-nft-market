import React from 'react'

// icons
import { BsArrowRightShort } from 'react-icons/bs'
import { FaEthereum, FaHeart } from 'react-icons/fa'

function Discover() {
  return (
    <section className="discover">
        <div className="content">
            <div className="discover-header">
                <div className="discover-title">Descobrir Itens</div>
                <button>Ver Tudo <BsArrowRightShort/></button>
            </div>
            <div className="discover-cards">
                <div className="cards">
                    <div className="card">
                        <div className="user-container">
                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-2.jpg" alt="" />
                            <div className="user">
                                <div className="nick">Nancy Martino</div>
                                <div className="status">Proprietário</div>
                            </div>
                        </div>
                        <img src="https://themesbrand.com/velzon/html/default/assets/images/nft/img-05.jpg" className="card-img" alt="" />
                        <div className="card-footer">
                            <div className="nft-status">
                                <div className="price"><FaEthereum/> 97.8 ETH</div>
                                <div className="rating"><FaHeart/> 19.29k</div>
                            </div>
                            <div className="nft-name">Patterns arts & culture</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="user-container">
                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-3.jpg" alt="" />
                            <div className="user">
                                <div className="nick">Henry Baird</div>
                                <div className="status">Criador</div>
                            </div>
                        </div>
                        <img src="https://themesbrand.com/velzon/html/default/assets/images/nft/img-06.jpg" className="card-img" alt="" />
                        <div className="card-footer">
                            <div className="nft-status">
                                <div className="price"><FaEthereum/> 475.25 ETH</div>
                                <div className="rating"><FaHeart/> 31.64k</div>
                            </div>
                            <div className="nft-name">Evolved Reality</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="user-container">
                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-5.jpg" alt="" />
                            <div className="user">
                                <div className="nick">Diana Kohler</div>
                                <div className="status">Proprietário</div>
                            </div>
                        </div>
                        <img src="https://themesbrand.com/velzon/html/default/assets/images/nft/img-04.jpg" className="card-img" alt="" />
                        <div className="card-footer">
                            <div className="nft-status">
                                <div className="price"><FaEthereum/> 701.38 ETH</div>
                                <div className="rating"><FaHeart/> 8.34k</div>
                            </div>
                            <div className="nft-name">Long-tailed macaque</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discover