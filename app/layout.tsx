import './globals.css';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <header className="py-6 bg-white shadow">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-primary">Danniel Lima</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#about" className="text-lg hover:text-accent">Sobre</a></li>
                <li><a href="#projects" className="text-lg hover:text-accent">Projetos</a></li>
                <li><a href="#contact" className="text-lg hover:text-accent">Contato</a></li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main className="flex-grow">{children}</main>

        <footer className="py-4 text-center border-t mt-6">
          <p className="text-gray-600">© 2024 DBX</p>
        </footer>
      </body>
    </html>
  );
}
