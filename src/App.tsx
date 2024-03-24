import React from 'react';
import Portfolio from 'components/Portfolio';
import Header from 'components/Header';
import './App.css';
import ProjectItem from 'components/ProjectItem';
interface IProjectItem {
  imgName: string;
  name: string;
}

const projectData: IProjectItem[] = [
  { imgName: 'intellax', name: 'IntellaX Wallet' },
  { imgName: 'bridge', name: 'Dapp - Bridge' },
  { imgName: 'lottery', name: 'Lottery Game' },
  { imgName: 'neowiz', name: 'Neowiz Site & 채용' },
  { imgName: 'betspider', name: 'Betspider Affiliate' },
  { imgName: 'moon', name: 'Moon Game' },
  { imgName: 'pmang', name: 'Pmang - 자산이동' },
  { imgName: 'migration', name: 'Web UI Migration' },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="project-component">
        <p className="project-title">FE Project</p>
        <div className="project-list">
          {projectData.map((value, idx) => {
            return (
              <ProjectItem
                key={idx}
                imgName={value.imgName}
                name={value.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
