import "./index.css"
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard
                userName="sergitxu"
                initialIsFollowing>
                Sergio Ortiz
            </TwitterFollowCard>
            <TwitterFollowCard
                userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>
        </section>
    )
}