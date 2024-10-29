import "./index.css"
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard
                userName="sergitxu"
                name="Sergio Ortiz"
                isFollowing
            />
            <TwitterFollowCard
                userName="midudev"
                name="Miguel Ángel Durán"
                isFollowing={false}
            />
        </section>
    )
}