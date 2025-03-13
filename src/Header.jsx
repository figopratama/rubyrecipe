import rubyRecipeLogo from "./images/recipe-app-logo.png"

export default function Header(){
    return (
        <header>
            <img src={rubyRecipeLogo}/>
            <h1>Ruby Recipe</h1>
        </header>
    )
}