import React from 'react'

export default function Announcement({announcement, deleteAnnouncement, editAnnouncement, changeVisibilityOfElements}) {
    return (
        <li>
            <div>Title: {announcement.title}</div>
            <div className={announcement.visibility ? '':'hidden'}>Description: </div>
            <div className={announcement.visibility ? '':'hidden'}>{announcement.description}</div>
            <div className={announcement.visibility ? '':'hidden'}>Date: {announcement.date}</div>
            <div className={announcement.visibility ? '':'hidden'}>Similar announcement:</div>
            <span className={announcement.visibility ? '':'hidden'}>similar</span>
            <span className={announcement.visibility ? '':'hidden'}> similar</span>
            <span className={announcement.visibility ? '':'hidden'}> similar</span>
            <div>
                <button onClick={()=>changeVisibilityOfElements(announcement.id)}>{announcement.visibility ? 'Hide' : 'Show more'}</button>
                <button onClick={()=>editAnnouncement(announcement.id)}>Edit</button>
                <button onClick={()=>deleteAnnouncement(announcement.id)}>Delete</button>
            </div>
        </li>
    )
}