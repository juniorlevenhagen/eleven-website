'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles['hero-section']} aria-labelledby="hero-title">
      {/* Imagem de fundo */}
      <div className={styles['hero-bg']} aria-hidden="true" />

      {/* Overlay gradiente para legibilidade */}
      <div className={styles['hero-overlay']} aria-hidden="true" />

      <div className={styles['hero-mockup']}>
        <div className={styles['hero-content']}>
          {/* Eyebrow */}
          <div className={styles['hero-eyebrow']} aria-hidden="true">
            <span className={styles['eyebrow-dot']} />
            Desenvolvimento Web Profissional
          </div>

          <h1 id="hero-title" className={styles['hero-title']}>
            Presença digital{' '}
            <span>
              {' '}
              transmite credibilidade.
            </span>
          </h1>

          <p className={styles['hero-subtitle']}>
            Sites e lojas virtuais feitos para converter visitas em clientes —
            com design moderno, código limpo e entrega ágil.
          </p>

          <div
            className={styles.ctaButtons}
            role="group"
            aria-label="Ações principais"
          >
            <Link
              href="/start"
              className={`${styles.btnPrimary} focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800`}
            >
              Começar Projeto
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a href="/services" className={styles.btnSecondary}>
              Ver Serviços
            </a>
          </div>

          {/* Social proof */}
          <div className={styles['hero-proof']}>
            <div className={styles['proof-avatars']} aria-hidden="true">
              {['CM', 'RP', 'FO', 'JL'].map((initials) => (
                <div key={initials} className={styles['proof-avatar']}>
                  {initials}
                </div>
              ))}
            </div>
            <p className={styles['proof-text']}>
              <strong>+50 clientes</strong> satisfeitos em 15 setores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
