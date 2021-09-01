import React, { useEffect, useState } from "react";
import "../../styles_global.scss";
import "./styles.scss";
import WalletModel from "../../wallet_modal";

export default function Header() {
	const { web3Loading, getweb3 } = WalletModel()
	const [modalShow, setModalShow] = useState("none")
	async function connectWallet() {
		await getweb3().then((response) => {
			response.eth.getAccounts().then((result) => {
				response.eth.getBalance(result[0]).then((result) => {
					console.log('balance:', parseFloat(result).toFixed(1))
					setModalShow("block")
				})
			})
		})
	}
	useEffect(() => {
		document.getElementById("modal").style.display = modalShow
		document.getElementById("main-container").style.opacity = modalShow === "block" ? 0.2 : 1
		document.getElementById("header-title").style.opacity = modalShow === "block" ? 0.2 : 1
	})

	return (
		<div className="header-wrapper" id="header-wrapper">
			<div id="header-title">
				<div className="header-text">FAITH CONNEXION&nbsp;</div>
				<div className="header-text text-gradient">COLLECTIVE</div>
			</div>
			<div className="connect-button-wrapper">
				{web3Loading ? <button className="button-blue-border" disabled>Loading...</button> : <button className="button-blue-border" onClick={connectWallet}>CONNECT A WALLET</button>}
			</div>
			<div className="wallet-result-modal" id="modal">
				<h1>RESERVE FAITH TOKEN</h1>
				<div className="balance-card">
					<div className="balance-card-row">
						<div className="balance-title"><img src="/icon-ETH.svg" alt="ETH Icon" /><span>ETH</span></div>
						<div className="balance-value">0.0</div>
					</div>
					<div className="balance-card-row">
						<div><span className="balance-max">Balance: 21.33ETH</span><span>(MAX)</span></div>
					</div>
					<img src="/icon-exchange.svg" alt="Exchange Icon" className="icon-exchange" />
				</div>
				<div className="balance-card">
					<div className="balance-card-row">
						<div className="balance-title"><img src="/icon-FAITH.svg" alt="FAITH TOKEN Icon" /><span>FAITH TOKEN</span></div>
					</div>
				</div>
				<div className="button-wrapper">
					<button className="white-simple-button">RESERVE</button>
				</div>
				<div className="price-list">
					<span>Price tolarance</span><span>1%</span>
				</div>
				<div className="price-list">
					<span>Gas Price</span><span>1 GWI</span>
				</div>
				<div className="price-list">
					<span>Token Price</span><span>1ETH = 10FAITH</span>
				</div>
				<button className="button-close" onClick={() => setModalShow("none")}><img src="/btn-close.svg" alt="close button" /></button>
			</div>
		</div>
	);
}