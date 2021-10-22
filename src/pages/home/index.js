import React from "react";
import "./styles.scss";
import "../../components/styles_global.scss"

export default function Home() {
	return (
		<div className="home-container">
			<div className="text-wrapper">
				<div className="text-gradient-big text-subtitle">MAKE THE WORLD YOUR RUNWAY</div>
				<div className="text-content-gray">FAITH TRIBE is a global collaborative fashion design platform.
					<br /><br />
					FAITH TRIBE is a revolutionary new way to create and collaborate on fashion designs, where every contributor gets paid directly for their contribution, regardless of where they are on the planet.
					<br /><br />
					The FAITH TRIBE ecosystem is built on Web 3.0 and NFT technologies, bringing to the market an open and inclusive platform, supported through economic structures that are controlled by the people involved rather than established financial actors.
				</div>
			</div>
			<div className="text-wrapper">
				<div className="text-gradient-big text-subtitle">HOW IT WORKS</div>
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					<div style={{ paddingRight: "30px" }}>
						<img src="/vector.png" alt="vector" className="vector-image" />
					</div>
					<div className="text-content-gray">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
						<br /><br />
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
						<br /><br />
						Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</div>
				</div>
			</div>
			<div className="text-wrapper">
				<div className="text-gradient-big text-subtitle">RESERVE NOW</div>
				<div className="text-content-gray">The FAITH TRIBE coin represents membership in the FAITH TRIBE community and gives members rights to receive a share of the fees for transactions process throught the community funded technology platform built on Ethereum. Ownership of the coin provides members the ability to make decisions on use of the community treasury to ensure the success of the FAITH TRIBE platform. 
					<br /><br />
					The community coin will be issued to reward contributors through active participation, as well airdropped to participants of the broader FAITH TRIBE ecosystem, in order to catalyze the alignment of incentives to pursue the FAITH TRIBE mission. Finally the community coin will always be redeemable for the purchase of digital and physical assets, at the base cost of producing the asset before any retail markup providing holders a guaranteed discount when they use the coin.
					<br /><br />
					To support the initial launch of the platform, the FAITH TRIBE coin is available now and can be reserved simply by depositing Ethereum into the community reservation smart contract. Click Connect Wallet to complete the process.</div>
					<br /><br />
				</div>
				<button className="button-blue-border">CONNECT WALLET</button>
			</div>
			<div className="text-wrapper">
				<div className="text-gradient-big text-subtitle">TEAM</div>
				<div className="team-member-list">
					<div className="team-member">
						<img src="/member1.png" alt="member1" />
						<div className="member-name">Albert Flores</div>
						<div className="text-content-gray">Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</div>
					</div>
					<div className="team-member">
						<img src="/member2.png" alt="member2" />
						<div className="member-name">Z</div>
						<div className="text-content-gray">Magna aliquam erat volutpat quis nostrud exerci tation ullamcorper.</div>
					</div>
					<div className="team-member">
						<img src="/member3.png" alt="member3" />
						<div className="member-name">Jane Cooper</div>
						<div className="text-content-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</div>
					</div>
					<div className="team-member">
						<img src="/member4.png" alt="member4" />
						<div className="member-name">Darrell Chung</div>
						<div className="text-content-gray">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</div>
					</div>
				</div>
			</div>
			<div className="text-wrapper">
				<div className="text-gradient-big text-subtitle">PARTNERS</div>
				<div className="partner-list">
					<img src="/adidas.png" alt="adidas" />
					<img src="/supreme.png" alt="supreme" />
					<img src="/zara.png" alt="zara" />
					<img src="/lacoste.png" alt="lacoste" />
				</div>
			</div>
		</div>
	);
}
