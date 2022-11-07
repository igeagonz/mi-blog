export default function SoftSkills() {
  const softSkills = [
    "communicate often and concisely",
    "strong sense of ownership",
    "technical and non-technical documentation",
    "teamwork > individual work",
    "helping others succeed",
    "agile methodology",
    "prioritization and time management",
    "continous learner",
    "efficient collaboration with UI/UX desisgner",
  ];

  return (
    <>
      <div className="text-lg">soft skills</div>
      <ul className="list-disc list-inside">
        {softSkills.map((sk) => (
          <li key={sk} className="mt-2">
            {sk}
          </li>
        ))}
      </ul>
    </>
  );
}
