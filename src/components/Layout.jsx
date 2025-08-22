import React from "react"
import Header from "./components/Header"
import Manager from "./components/Manager"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <header className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          <Header />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Manager />
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App
