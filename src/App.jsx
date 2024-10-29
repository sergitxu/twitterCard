import "./index.css"
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

    const users = [
        {
            name: "Sergio Ortiz",
            userName: "sergitxu",
            isFollowing: true,
        },
        {
            name: "Miguel Ángel Durán",
            userName: "midudev",
            isFollowing: false
        },
        {
            name: "Pablo Márquez",
            userName: "pableras",
            isFollowing: true
        },
        {
            name: "Juan Pérez",
            userName: "juanito  ",
            isFollowing: false
        }
    ];
    return (
        <section className="App">
            {
                users.map(({ name, userName, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}