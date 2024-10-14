import './globals.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section id="about" className="text-center mb-16">
        <div className="mx-auto w-32 h-32 mb-4">
          <Image
            src="/profile.jpg"
            alt="Sua foto"
            className="rounded-full"
            width={128}
            height={128}
          />
        </div>
        <h1 className="text-4xl font-serif font-bold">Olá, eu sou Danniel Lima</h1>
        <p className="text-xl font-light mt-4 max-w-2xl mx-auto text-secondary">
          Engenheiro de Software focado em criar soluções escaláveis e eficientes. Amo trabalhar com tecnologias modernas como JavaScript, TypeScript, React e Node.js.
        </p>
      </section>

      <section id="projects" className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-8">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Projeto 1</h3>
            <p className="text-gray-700">
              Descrição breve do projeto, as tecnologias utilizadas e o objetivo.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Projeto 2</h3>
            <p className="text-gray-700">
              Descrição breve do projeto, as tecnologias utilizadas e o objetivo.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Entre em Contato</h2>
        <p className="text-lg mb-4">
          Se você deseja discutir um projeto ou apenas dizer olá, sinta-se à vontade para me enviar uma mensagem!
        </p>
        <a
          href="mailto:seu-email@gmail.com"
          className="text-lg font-semibold text-white bg-accent py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Enviar E-mail
        </a>
      </section>
    </div>
  );
}
