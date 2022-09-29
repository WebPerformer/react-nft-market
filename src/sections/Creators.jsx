import React from 'react'

// icons
import { BsThreeDots } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'

function Creators() {
  return (
    <section className="creators">
        <div className="content">
            <div className="text-container">
                <div className="title">Melhor criador esta semana</div>
                <div className="subtitle">Os NFTs são valiosos porque verificam a autenticidade de um ativo não fungível. Isso torna esses ativos únicos e únicos.</div>
            </div>
            <div className="creators-cards">
                <div className="cards">
                    <div className="card">
                        <div className="creator">
                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg" alt="" />
                            <div className="creator-infos">
                                <div className="creator-name">Timothy Smith</div>
                                <div className="creator-price"><FaEthereum/> 4.754 ETH</div>
                            </div>
                        </div>
                        <div className="dots"><BsThreeDots/></div>
                    </div>
                    <div className="card">
                        <div className="creator">
                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-2.jpg" alt="" />
                            <div className="creator-infos">
                                <div className="creator-name">Alexis Clarke</div>
                                <div className="creator-price"><FaEthereum/> 81.369 ETH</div>
                            </div>
                        </div>
                        <div className="dots"><BsThreeDots/></div>
                    </div>
                    <div className="card">
                        <div className="creator">
                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-3.jpg" alt="" />
                            <div className="creator-infos">
                                <div className="creator-name">Michael Morris</div>
                                <div className="creator-price"><FaEthereum/> 13.156 ETH</div>
                            </div>
                        </div>
                        <div className="dots"><BsThreeDots/></div>
                    </div>
                    <div className="card">
                        <div className="creator">
                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-4.jpg" alt="" />
                            <div className="creator-infos">
                                <div className="creator-name">Jeny Parker</div>
                                <div className="creator-price"><FaEthereum/> 34.754 ETH</div>
                            </div>
                        </div>
                        <div className="dots"><BsThreeDots/></div>
                    </div>
                    <div className="card">
                        <div className="creator">
                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-5.jpg" alt="" />
                            <div className="creator-infos">
                                <div className="creator-name">Kara Jones</div>
                                <div className="creator-price"><FaEthereum/> 13.841 ETH</div>
                            </div>
                        </div>
                        <div className="dots"><BsThreeDots/></div>
                    </div>
                    <div className="card">
                        <div className="creator">
                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-6.jpg" alt="" />
                            <div className="creator-infos">
                                <div className="creator-name">Michelle Martin</div>
                                <div className="creator-price"><FaEthereum/> 63.710 ETH</div>
                            </div>
                        </div>
                        <div className="dots"><BsThreeDots/></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Creators