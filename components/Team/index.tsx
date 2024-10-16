import React from 'react';
import TeamMate from './TeamMate';
import teamData from './TeamData'; // Import the JSON data

// Sort the teams and members alphabetically
const teams = teamData.map((team) => {
  team.members.sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase()
      ? 1
      : a.name.toUpperCase() < b.name.toUpperCase()
        ? -1
        : 0
  );
  return team;
});

const Team: React.FC = () => {
  return (
    <div className="mt-20 bg-[#070b0d] p-8 text-center">
      {teams.map((team) => (
        <div key={team.name}>
          <div className="mb-14 flex items-center space-x-4">
            <div className="relative flex grow">
              <svg
                width={'10px'}
                height={'10px'}
                className="absolute left-0 top-[-4px] rotate-45 fill-slate-200"
                viewBox="0 0 10 10"
              >
                <rect width={'10px'} height={'10px'} />
              </svg>
              <hr className="flex-grow border-t-2 border-slate-400" />
            </div>
            <h1 className="font-anton z-10 text-3xl font-bold uppercase sm:text-4xl md:text-5xl">
              {team.name}
            </h1>
            <div className="relative flex grow">
              <svg
                width={'10px'}
                height={'10px'}
                className="absolute right-0 top-[-4px] rotate-45 fill-slate-200"
                viewBox="0 0 10 10"
              >
                <rect width={'10px'} height={'10px'} />
              </svg>
              <hr className="flex-grow border-t-2 border-slate-400" />
            </div>
          </div>
          <div className="mb-24 flex flex-wrap items-center justify-evenly gap-x-4 gap-y-8">
            {team.members.map((member) => (
              <TeamMate
                key={member.name}
                photo={member.image}
                name={member.name}
                title={member.title}
                linkedinLink={member.linkedIn}
                githubLink={member.github}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
