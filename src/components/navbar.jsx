import  {link} from 'react-router-dom'

 
 
 export default function navbar() {
    return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <img src="./src/assets/favicon.png" alt="logo" width="32" height="32" />
      <text>Duck's Code</text>
      <a href="/">Home</a>
      <a href="/sobre">Sobre</a>
      <a href="/contato">Contato</a>
    </nav>
    )
 }