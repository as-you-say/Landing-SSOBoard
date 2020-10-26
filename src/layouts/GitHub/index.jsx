import React, { useEffect, useState } from 'react'

// Components
import KanbanBoard from '../../components/KanbanBoard';

// Icons
import { BiGitBranch, BiGitPullRequest } from 'react-icons/bi';
import { VscIssues } from 'react-icons/vsc';
import { RiGitRepositoryLine } from 'react-icons/ri';

export default function GitHub() {
  const [repositories, setRepositories] = useState([]);
  const [selectedRepository, setSelectedRepository] = useState({
    branches:[],
    issues:[],
    pullRequests:[]
  });

  useEffect(() => {
    setRepositories(data);
  }, [repositories]);

  function onClickCard (id) {
    setSelectedRepository(repositories.filter(o => o.id === id)[0]);
  }
  
  console.log(selectedRepository);
  return (
    <div id="github" className="clear">
      <KanbanBoard 
        className="repositories"
        Icon={RiGitRepositoryLine}
        title="Repositories"
        emptyText="No repositories"
        dataList={repositories}
        onClickCard={onClickCard}
      />
      <KanbanBoard 
        className="branches"
        Icon={BiGitBranch}
        title="Branches"
        emptyText="No branches"
        dataList={selectedRepository.branches}
      />
      <KanbanBoard 
        className="issues"
        Icon={VscIssues}
        title="Issues"
        emptyText="No issues"
        dataList={selectedRepository.issues}
      />
      <KanbanBoard
        className="pull-requests"
        Icon={BiGitPullRequest}
        title="Pull Requests"
        emptyText="No pull requests"
        dataList={selectedRepository.pullRequests}
      />
    </div>
  )
}


const data =[
  {
    id:"0", name:"project-1", private:true, link:"https://github.com",
    branches: [
      { id:"0", name:"master", link:"https://github.com"},
      { id:"1", name:"staging", link:"https://github.com"},
      { id:"2", name:"sub-1", link:"https://github.com"},
      { id:"3", name:"sub-2", link:"https://github.com"},
    ],
    issues:[
      { id:"0", name:"issue-1-Oh my god!", link:"https://github.com"},
      { id:"1", name:"issue-2-Oh my god!", link:"https://github.com"},
      { id:"2", name:"issue-3-Oh my god!", link:"https://github.com"},
      { id:"3", name:"issue-4-Oh my god!", link:"https://github.com"},
    ],
    pullRequests:[
      { id:"0", name:"Pull Request-1- Hey! completed!", link:"https://github.com"},
      { id:"1", name:"Pull Request-2- Hey! completed!", link:"https://github.com"},
      { id:"2", name:"Pull Request-3- Hey! completed!", link:"https://github.com"},
      { id:"3", name:"Pull Request-4- Hey! completed!", link:"https://github.com"},
    ]
  },
  {
    id:"1", name:"project-2", private:true, link:"https://github.com",
    branches: [
      { id:"0", name:"master", link:"https://github.com"},
      { id:"1", name:"staging", link:"https://github.com"},
      { id:"2", name:"sub-1", link:"https://github.com"},
      { id:"3", name:"sub-2", link:"https://github.com"},
    ],
    issues:[
      { id:"0", name:"issue-1-Oh my god!", link:"https://github.com"},
      { id:"1", name:"issue-2-Oh my god!", link:"https://github.com"},
      { id:"2", name:"issue-3-Oh my god!", link:"https://github.com"},
      { id:"3", name:"issue-4-Oh my god!", link:"https://github.com"},
    ],
    pullRequests:[
      { id:"0", name:"Pull Request-1- Hey! completed!", link:"https://github.com"},
      { id:"1", name:"Pull Request-2- Hey! completed!", link:"https://github.com"},
      { id:"2", name:"Pull Request-3- Hey! completed!", link:"https://github.com"},
      { id:"3", name:"Pull Request-4- Hey! completed!", link:"https://github.com"},
    ]
  }
  ,
  {
    id:"2", name:"project-3", private:false, link:"https://github.com",
    branches: [
      { id:"0", name:"master", link:"https://github.com"},
      { id:"1", name:"staging", link:"https://github.com"},
      { id:"2", name:"sub-1", link:"https://github.com"},
      { id:"3", name:"sub-2", link:"https://github.com"},
    ],
    issues:[
      { id:"0", name:"issue-1-Oh my god!", link:"https://github.com"},
      { id:"1", name:"issue-2-Oh my god!", link:"https://github.com"},
      { id:"2", name:"issue-3-Oh my god!", link:"https://github.com"},
      { id:"3", name:"issue-4-Oh my god!", link:"https://github.com"},
    ],
    pullRequests:[
      { id:"0", name:"Pull Request-1- Hey! completed!", link:"https://github.com"},
      { id:"1", name:"Pull Request-2- Hey! completed!", link:"https://github.com"},
      { id:"2", name:"Pull Request-3- Hey! completed!", link:"https://github.com"},
      { id:"3", name:"Pull Request-4- Hey! completed!", link:"https://github.com"},
    ]
  }
]