import React from 'react'
import './featureItem.css'

const FeatureItem = () => {
  return (
    <>
        <span className='featureTitle'>TABLEAU DE BORD</span>
    <   div className="containerRow">
            <div className="row red">
                <div className="iconRow">
                    <i className="fas fa-file"></i>
                </div>
                <div className="rowTxt">
                    <span className="rowTitle">MATIERES</span>
                    <span className="rowNum">40</span>
                </div>
            </div>
            <div className="row bleu">
                <div className="iconRow bleu">
                    <i className="fas fa-users"></i>
                </div>
                <div className="rowTxt">
                    <span className="rowTitle">PROFESSEURS</span>
                    <span className="rowNum">40</span>
                </div>
            </div>
            <div className="row yellow">
                <div className="iconRow yellow">
                    <i className="fas fa-house-chimney"></i>
                </div>
                <div className="rowTxt">
                    <span className="rowTitle">CLASSES</span>
                    <span className="rowNum">20</span>
                </div>
            </div>
            <div className="row orange">
                <div className="iconRow orange">
                    <i className="fas fa-users"></i>
                </div>
                <div className="rowTxt">
                    <span className="rowTitle">ELEVES</span>
                    <span className="rowNum">40</span>
                </div>
            </div>
            <div className="row violet">
                <div className="iconRow violet">
                    <i className="fas fa-money-bill"></i>
                </div>
                <div className="rowTxt">
                    <span className="rowTitle">ELEVES EN RETARD DE PAIEMENT</span>
                    <span className="rowNum">40</span>
                </div>
            </div>
            <div className="row bleufort">
                <div className="iconRow bleufort">
                    <i className="fas fa-money-bill-1"></i>
                </div>
                <div className="rowTxt">
                    <span className="rowTitle">ELEVES AYANT DEJA SOLDE</span>
                    <span className="rowNum">40</span>
                </div>
            </div>
            <div className="row gris">
                <div className="iconRow gris">
                    <i className="fas fa-list"></i>
                </div>
                <div className="rowTxt">
                    <span className="rowTitle">EFFECTIF ELEVES FILLES</span>
                    <span className="rowNum">40</span>
                </div>
            </div>
            <div className="row noir">
                <div className="iconRow noir">
                    <i className="fas fa-list"></i>
                </div>
                <div className="rowTxt">
                    <span className="rowTitle">EFFECTIF ELEVES HOMMES</span>
                    <span className="rowNum">40</span>
                </div>
            </div>
    </div>
    </>
  )
}

export default FeatureItem