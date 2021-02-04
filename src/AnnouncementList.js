import React from 'react'
import Announcement from './Announcement'

export default function AnnouncementList(props) {
    return(
        <ul>
            {props.announcements.map(announcement => {
                return (
                    <Announcement 
                    announcement={announcement} 
                    key={announcement.id} 
                    editAnnouncement={props.changeAnnouncement}
                    deleteAnnouncement={props.removeAnnouncement}
                    />
                )
            })}
        </ul>
    )
}