import React from "react";
import { Link } from "react-router-dom";
import { PiAmazonLogoFill } from "react-icons/pi";
import { FcGoogle, FcApproval } from "react-icons/fc";
import { BsApple, BsFacebook } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import '../Styles/Signin.css';
import { useState } from "react";

export default function Signin() {
    const [showMore, setShowMore] = useState(false);


    function showMoreOptions() {
        setShowMore(true)
    }

    return (
        <main className="signinChoose">
            <section className="left">
                <h2>Sign in</h2>
                <button><FcApproval /> Sign in with this site</button>
                <button><PiAmazonLogoFill /> Sign in with Amazon</button>
                <button> <FcGoogle /> Sign in with Google</button>
                <button><BsApple />Sign in with Apple</button>
                {showMore ?
                    <button><BsFacebook />Sign in with Facebook</button>
                    :
                    <button className="showMore" onClick={showMoreOptions}>Show more options <MdOutlineKeyboardArrowDown /></button>
                }

                <button className="createNew">Create a new Account</button>
                <p>By signing in, you agree to IMDb's<Link> Conditions of Use </Link> and <Link>Privacy Policy</Link>.</p>
            </section>
            <section className="right">
                <h2>
                    Benefits of your free account
                </h2>
                <p>
                    <h3>
                        Personalized Recommendations
                    </h3>
                    Discover shows you'll love.
                    <h3>
                        Your Watchlist
                    </h3>
                    Track everything you want to watch and receive e-mail when movies open in theaters.
                    <h3>
                        Your Ratings
                    </h3>
                    Rate and remember everything you've seen.
                    <h3>
                        Contribute to this website
                    </h3>
                    Add data that will be seen by millions of people and get cool badges.
                </p>
            </section>
        </main>
    )
}