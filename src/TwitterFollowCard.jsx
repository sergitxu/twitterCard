import "./TwitterFollowCard.css"
import { useState } from "react";

export function TwitterFollowCard({ children, userName = "sergitxu", initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const buttonText = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img src={`https://unavatar.io/${userName}`} alt="el avatar de Sergitxu" className="tw-followCard-avatar" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {buttonText}
                </button>
            </aside>
        </article>
    )
}