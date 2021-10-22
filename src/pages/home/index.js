import React from "react";
import "./styles.scss";
import "../../components/styles_global.scss"

export default function Home() {
	return (
		<div className="home-container">
			<div className="text-wrapper">
				<div className="text-gradient-big text-subtitle">VISION</div>
				<div className="text-content-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
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
				<div className="text-gradient-big text-subtitle">RESERVATION</div>
				<div className="text-content-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
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
