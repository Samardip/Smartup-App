import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import InfoIcon from "@mui/icons-material/Info";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EngineeringIcon from '@mui/icons-material/Engineering';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BiotechIcon from '@mui/icons-material/Biotech';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import WifiFindIcon from '@mui/icons-material/WifiFind';

export default function Navbar({ newsData }) {
    const openLinkedInProfile = () => {
        var win = window.open("https://www.linkedin.com/in/samardipmandal/", '_blank');
        win.focus();
    }
    return (
        <div
            style={{
                backgroundColor: "floralwhite",
                width: "182px",
                height: "100vh",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "Black",
                        marginTop: "2px",
                        fontFamily: "emoji",
                    }}
                >{`Smartup`}</div>

                <div>
                    <MenuIcon
                        style={{
                            color: "black",
                            fontSize: "32px",
                        }}
                    />
                </div>
            </div>
            <div style={{ cursor: "pointer" }}>
                <div
                    style={{
                        marginTop: "20px",
                        fontFamily: "emoji",
                        fontSize: "20px",
                        backgroundColor: "antiquewhite",
                        borderTopLeftRadius: "21px",
                        borderBottomLeftRadius: "21px",
                        display: "flex"
                    }}
                >
                    <WifiFindIcon style={{ marginRight: "10px" }} />
                    Discover <div style={{ margin: "7px 1px 4px 34px" }}><div style={{
                        backgroundColor: "rgb(0, 196, 255)",
                        color: "white",
                        borderRadius: "19px",
                        width: "34px",
                        height: "17px",
                        fontSize: "12px",
                        fontWeight: "800",
                        textAlign: "center"
                    }}>{newsData.length}</div></div>
                </div>
            </div>
            <div>
                <div
                    style={{
                        marginTop: "20px",
                        fontFamily: "emoji",
                        fontSize: "15px",
                        marginLeft: "10px",
                    }}
                >
                    <BlurCircularIcon style={{ marginRight: "10px" }} />
                    Smartup
                </div>
            </div>
            <div>
                <div
                    style={{
                        marginTop: "20px",
                        fontFamily: "emoji",
                        fontSize: "15px",
                    }}
                >
                    <EngineeringIcon style={{ marginRight: "10px" }} />
                    Main Community
                </div>
            </div>
            <div>
                <div
                    style={{
                        marginTop: "20px",
                        fontFamily: "emoji",
                        fontSize: "15px",
                    }}
                >
                    <CelebrationIcon style={{ marginRight: "10px" }} />
                    Fun Community
                </div>
            </div>
            <div>
                <div
                    style={{
                        marginTop: "20px",
                        fontFamily: "emoji",
                        fontSize: "15px",
                    }}
                >
                    <BiotechIcon style={{ marginRight: "10px" }} />
                    Tech Community
                </div>
            </div>
            <div>
                <div
                    style={{
                        marginTop: "20px",
                        fontFamily: "emoji",
                        fontSize: "15px",
                    }}
                >
                    <LeaderboardIcon style={{ marginRight: "10px" }} />
                    Leadboard Community
                </div>
            </div>
            <div style={{ marginTop: "210px" }}>
                <div
                    style={{
                        height: "1px",
                        backgroundColor: "black",
                        margin: "0px 10px 0px 10px",
                    }}
                ></div>
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            fontSize: "17px",
                            alignItems: "center",
                            fontFamily: "emoji",
                            fontWeight: "700",
                            marginTop: "17px",
                            width: "95%",
                        }}
                    >
                        <InfoIcon style={{ fontSize: "19px" }} /> About Smartup
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            marginLeft: "48px",
                            fontSize: "13px",
                            fontFamily: "emoji",
                            marginTop: "18px",
                            fontWeight: "700",
                        }}
                    >
                        <div>Send Feedback</div>
                        <div>Term of Use</div>
                        <div>Privacy Policy</div>
                    </div>
                    <div style={{
                        marginTop: "40px",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <LinkedInIcon style={{ cursor: "pointer" }} onClick={() => { openLinkedInProfile() }} />
                        <FacebookIcon style={{ margin: "0px 3px 0px 3px" }} />
                        <TwitterIcon style={{ margin: "0px 3px 0px 3px" }} />
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
