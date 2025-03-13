import ReactMarkdown from "react-markdown"



export default function RubyRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Ruby Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}