"use client";

import Link from "next/link";
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-4 px-4 sm:px-6 lg:px-8 text-center overflow-hidden flex items-center">
      <div className={styles["hero-mockup"]}>
        <div className={`${styles["floating-element"]} ${styles["float1"]}`} />
        <div className={`${styles["floating-element"]} ${styles["float2"]}`} />
        <div className={`${styles["floating-element"]} ${styles["float3"]}`} />

        <div className={styles["hero-content"]}>
          <h1 className={styles["hero-title"]}>Criamos Sites que Convertem</h1>
          <p className={styles["hero-subtitle"]}>
            Desenvolvimento web profissional com foco em performance, design
            moderno e resultados reais para o seu negócio.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/start" className={styles.btnPrimary}>
              Começar Projeto
            </Link>
            {/* <a href="#" className={styles.btnSecondary}>
              Ver Portfolio
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};
