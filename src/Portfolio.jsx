export default function PortfolioJoaoRamos() {
  const skills = [
    "Python",
    "HTML5",
    "CSS3",
    "APIs REST",
    "Desenvolvimento Web",
    "Responsividade",
    "Git & GitHub",
    "UI Minimalista",
  ];

  const skillGroups = [
    {
      title: "Base de Desenvolvimento",
      description: "Tecnologias que sustentam interfaces e estruturas web.",
      items: ["Python", "HTML5", "CSS3"],
      accent: "from-sky-400/20 to-transparent",
    },
    {
      title: "Construção de Produtos",
      description: "Recursos voltados para sistemas completos e integração.",
      items: ["APIs REST", "Desenvolvimento Web", "Responsividade"],
      accent: "from-indigo-400/20 to-transparent",
    },
    {
      title: "Fluxo e Qualidade",
      description: "Ferramentas e práticas para entrega organizada e visual limpo.",
      items: ["Git & GitHub", "UI Minimalista"],
      accent: "from-emerald-400/20 to-transparent",
    },
  ];

  const experiences = [
    {
      title: "Frontend com HTML5 e CSS3",
      label: "Interface",
      description:
        "Criacao de interfaces modernas, responsivas e bem estruturadas, com foco em usabilidade, organizacao visual e boa experiencia do usuario.",
      focus: ["Layout limpo", "Boa usabilidade"],
      accent: "from-sky-400/20 via-cyan-400/10 to-transparent",
    },
    {
      title: "Backend com Python",
      label: "Estrutura",
      description:
        "Desenvolvimento de sistemas web, automacoes, integracoes e APIs com Python, priorizando performance, clareza de codigo e escalabilidade.",
      focus: ["APIs e integracoes", "Performance"],
      accent: "from-indigo-400/20 via-blue-400/10 to-transparent",
    },
    {
      title: "Integracao Full Stack",
      label: "Entrega",
      description:
        "Conexao entre frontend e backend para entregar aplicacoes completas, funcionais e prontas para uso em ambientes reais.",
      focus: ["Fluxo completo", "Visao de produto"],
      accent: "from-emerald-400/20 via-teal-400/10 to-transparent",
    },
  ];

  const highlights = [
    "Design limpo e profissional",
    "Codigo organizado e escalavel",
    "Foco em performance e manutencao",
    "Solucoes web modernas",
  ];

  const projects = [
    {
      title: "API com Python",
      category: "Backend",
      description:
        "API REST estruturada com foco em organizacao, performance e integracao simples com aplicacoes modernas.",
      tech: ["Python", "FastAPI", "REST"],
      metrics: ["Endpoints bem definidos", "Integracao escalavel"],
      accent: "from-sky-400/20 via-cyan-400/10 to-transparent",
    },
    {
      title: "Sistema Web",
      category: "Full Stack",
      description:
        "Sistema completo conectando frontend e backend com experiencia mais fluida, visual consistente e base pronta para crescer.",
      tech: ["Frontend", "Backend", "Python"],
      metrics: ["Fluxo intuitivo", "Estrutura pronta para evoluir"],
      accent: "from-indigo-400/20 via-blue-400/10 to-transparent",
    },
    {
      title: "Automacao",
      category: "Produtividade",
      description:
        "Script em Python para reduzir tarefas repetitivas, aumentar eficiencia operacional e melhorar a consistencia do processo.",
      tech: ["Python", "Scripts", "Automacao"],
      metrics: ["Menos retrabalho", "Mais produtividade"],
      accent: "from-emerald-400/20 via-teal-400/10 to-transparent",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
              Desenvolvedor Web Full Stack Python
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Joao Ramos
              </h1>
              <p className="max-w-xl text-base leading-7 text-white/70 md:text-lg">
                Desenvolvedor focado em criar aplicacoes web modernas,
                minimalistas e funcionais, unindo interfaces bem construidas com
                backends solidos em Python.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/JFRFilho"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:scale-[1.02]"
              >
                GitHub
              </a>

              <a
                href="#contato"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contato
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-80 w-80 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl shadow-black/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_45%)]" />
              <div className="flex h-full items-center justify-center">
                <div className="h-40 w-40 overflow-hidden rounded-full border border-white/15 bg-white/10">
                  <img
                    src="/foto.jpeg"
                    alt="Foto de Joao Ramos"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Perfil
                </p>
                <p className="mt-1 text-sm font-medium text-white/90">
                  Full Stack - Python
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4 md:px-10">
        <div className="grid gap-4 md:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/75 shadow-lg shadow-black/10"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              Experiencias
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              O que eu faco
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/65">
              Competencias organizadas como frentes de trabalho, com foco no
              impacto de cada area e em como elas se conectam na entrega final.
            </p>
          </div>

          <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
            Exploracao visual
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-sky-950/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)] opacity-80" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/60">
                      {item.label}
                    </span>
                    <h3 className="mt-4 text-xl font-medium text-white transition duration-300 group-hover:text-sky-100">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-sm text-white/75 transition duration-300 group-hover:scale-110 group-hover:border-white/20 group-hover:text-white">
                    0{index + 1}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.focus.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/78 transition duration-300 group-hover:bg-white/10"
                    >
                      {point}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Resultado esperado
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/78">
                    Solucoes mais bem estruturadas, com experiencia consistente
                    e base pronta para evolucao.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              Projetos
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Alguns trabalhos em destaque
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/65">
              Uma secao mais visual e interativa para destacar tecnologia,
              proposta e impacto de cada solucao.
            </p>
          </div>

          <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
            Hover para explorar
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-sky-950/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)] opacity-70" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/60">
                      {project.category}
                    </span>
                    <h3 className="mt-4 text-xl font-medium text-white transition duration-300 group-hover:text-sky-100">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-white/70 transition duration-300 group-hover:scale-110 group-hover:border-white/20 group-hover:text-white">
                    ↗
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  {project.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs leading-5 text-white/72"
                    >
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs text-white/78 transition duration-300 group-hover:bg-white/12"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                  <span className="text-white/55">Projeto em destaque</span>
                  <span className="text-white/80 transition duration-300 group-hover:translate-x-1">
                    Ver conceito
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4 md:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl shadow-black/10">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_38%)]" />
              <div className="relative">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                      Skills
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight">
                      Tecnologias e foco
                    </h2>
                    <p className="max-w-xl text-sm leading-7 text-white/65">
                      Uma apresentação mais atual das competências, organizada
                      por áreas para mostrar domínio técnico e direção de
                      trabalho.
                    </p>
                  </div>

                  <div className="inline-flex w-fit rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
                    Passe o olhar e explore
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {skillGroups.map((group) => (
                    <article
                      key={group.title}
                      className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-black/25"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                      />
                      <div className="relative">
                        <h3 className="text-base font-medium text-white">
                          {group.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/62">
                          {group.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs text-white/80 transition duration-300 group-hover:bg-white/12"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.14),transparent_35%)]" />
              <div className="relative space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                    Stack em destaque
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-2xl border border-white/10 bg-white/7 px-4 py-2 text-sm text-white/82 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/12"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      Especialidade
                    </p>
                    <p className="mt-3 text-sm font-medium text-white/88">
                      Full Stack com Python
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      Abordagem
                    </p>
                    <p className="mt-3 text-sm font-medium text-white/88">
                      Interfaces limpas e código claro
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      Prioridade
                    </p>
                    <p className="mt-3 text-sm font-medium text-white/88">
                      Performance e manutenção
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10"
      >
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 shadow-2xl shadow-black/20 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                Contato
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Vamos construir algo incrivel
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                Estou disponivel para colaborar em projetos web, sistemas
                personalizados, automacoes e solucoes full stack com Python.
              </p>
            </div>

            <div className="space-y-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
              <p className="text-sm text-white/85">LinkedIn: Joao Ramos</p>
              <a
                href="https://github.com/JFRFilho"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-white/85 transition hover:text-white"
              >
                GitHub: JFRFilho
              </a>
              <a
                href="https://instagram.com/jramoss_f"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-white/85 transition hover:text-white"
              >
                Instagram: @jramoss_f
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
