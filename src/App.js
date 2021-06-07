import './App.css'

import Header from "./components/Header/Header.js"
import Leftmenu from "./components/Left menu/LeftMenu.js"
import EmailToolbar from "./components/Email Toolbar/EmailToolbar.js"
import EmailTitle from "./components/Email Title/EmailTitle.js"
import EmailContentHeader from "./components/Email Header/EmailContentHeader.js"
import EmailBody from './components/Email body/EmailBody'
import EmailActions from './components/Email Actions.css/EmailActions'

function App() {
  return (
    <div className="app">
      <Header />
      <Leftmenu />
      <main className="email-view">
        <EmailToolbar />
        <article className="email-content">
          <EmailTitle />
          <EmailContentHeader />
          <EmailBody />
          <EmailActions />
        </article>
      </main>
    </div>
  )
}

export default App
