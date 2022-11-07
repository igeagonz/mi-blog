export default function HardSkills() {
  const hardSkills = [
    "write clean, efficient, and scalable code",
    "software architecture decision making",
    "data structures and algorithms",
    "compiled and interpreted software languages",
    "object orientated and functional programming",
    "mvc framework knowledge",
    "ci/cd",
    "production application monitoring",
    "containerization",
  ];

  const softwareTools = [
    "git/github/gitlab",
    "vscode",
    "figma",
    "argocd",
    "docker",
    "kubernetes",
    "aws",
  ];

  const languages = [
    "javascipt",
    "ruby",
    "python",
    "java",
    "elixir",
    "sql",
    "c++",
  ];

  const frameworks = ["ruby on rails", "vuejs", "reactjs", "nextjs", "phoenix"];

  return (
    <>
      <div className="text-lg">hard skills</div>
      <ul className="list-disc list-inside">
        {hardSkills.map((sk) => (
          <li key={sk} className="mt-2">
            {sk}
          </li>
        ))}
      </ul>

      <div className="text-lg mt-4">developer tools</div>
      <ul className="list-disc list-inside">
        {softwareTools.map((st) => (
          <li key={st} className="mt-2">
            {st}
          </li>
        ))}
      </ul>
      <div className="text-lg mt-4">languages</div>
      <ul className="list-disc list-inside">
        {languages.map((l) => (
          <li key={l} className="mt-2">
            {l}
          </li>
        ))}
      </ul>
      <div className="text-lg mt-4">frameworks</div>
      <ul className="list-disc list-inside">
        {frameworks.map((f) => (
          <li key={f} className="mt-2">
            {f}
          </li>
        ))}
      </ul>
    </>
  );
}
