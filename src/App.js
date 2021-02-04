import './App.css';
import AnnouncementList from './AnnouncementList'
import React from 'react'

function App() {
  const [announcements, setAnnouncements] = React.useState([
    {id: 1, title:'cxv', description:'asdszfsdfad', date:'10.10.10'},
    {id: 2, title:'sdf', description:'dfgkjdnfgks', date:'10.10.10'},
    {id: 3, title:'xfg', description:'sfdgijkdfgf', date:'10.10.10'},
  ])

  function editAnnouncement(id) {
    let newTitle = prompt('Enter new title', 'new title');
    let newExplanation = prompt('Enter new explanation', 'new explanation');
    setAnnouncements(
      announcements[announcements.length] = {id: announcements.length, title: newTitle, briefExplanation: newExplanation, date: '' + new Date().getFullYear() + new Date().getMonth() + new Date().getDate()}
    )
  }

  function deleteAnnouncement(id) {
    setAnnouncements(
      announcements.filter(announcement => announcement.id !== id)
    )
  }
  
  return (
    <div className="App">
      <AnnouncementList 
      announcements={announcements}
      changeAnnouncement={editAnnouncement}
      removeAnnouncement={deleteAnnouncement}
      />
    </div>
  );
}

export default App;
