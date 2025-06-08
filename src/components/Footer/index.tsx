export const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white py-8 px-6 pb-3">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-gray-100 mb-2 text-lg">
              <div className="notranslate" translate="no">
                Eleven Web Development
              </div>
            </h3>
            <p className="text-gray-400 leading-normal text-sm">
              Criando experiências digitais que transformam negócios desde 2019.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-gray-100 mb-2 text-lg">Serviços</h3>
            <p className="text-gray-400 leading-normal text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Sites Institucionais
              </a>
            </p>
            <p className="text-gray-400 leading-normal text-sm">
              <a href="#" className="hover:text-white transition-colors">
                E-commerce
              </a>
            </p>
            <p className="text-gray-400 leading-normal text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Landing Pages
              </a>
            </p>
            <p className="text-gray-400 leading-normal text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Manutenção
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-gray-100 mb-2 text-lg">Contato</h3>
            <p className="text-gray-400 leading-normal text-sm">
              contato@elevenwebdev.com.br
            </p>
          </div>
        </div>

        <div className="notranslate border-t border-gray-700 mt-6 pt-3 text-center text-gray-400 text-sm">
          <p>
            &copy; 2024 Eleven Web Development. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};
