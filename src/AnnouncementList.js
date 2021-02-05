import React from 'react'
import Announcement from './Announcement'

export default function AnnouncementList(props) {
    return(
        <div className='list'>
            <ul>
                {props.announcements.map(announcement => {
                    return (
                        <Announcement 
                        announcement={announcement} 
                        key={announcement.id} 
                        editAnnouncement={props.changeAnnouncement}
                        deleteAnnouncement={props.removeAnnouncement}
                        changeVisibilityOfElements={props.changeVisibility}
                        />
                    )
                })}
            </ul>
        </div>
        
    )
}