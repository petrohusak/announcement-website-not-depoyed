import React from 'react'

export default function Announcement({announcement, deleteAnnouncement, editAnnouncement, changeVisibilityOfElements}) {
    return (
        <div className='announcement'>
            <li>
                <div>Title: {announcement.title}</div>
                <div className={announcement.visibility ? '':'hidden'}>Description: </div>
                <div className={announcement.visibility ? '':'hidden'}>{announcement.description}</div>
                <div className={announcement.visibility ? '':'hidden'}>Date: {announcement.date}</div>
                <div className={announcement.visibility ? '':'hidden'}>Similar announcement:</div>
                <div className={announcement.visibility ? '':'hidden'}>{announcement.similar[0]}</div>
                <div className={announcement.visibility ? '':'hidden'}>   {announcement.similar[1]}</div>
                <div className={announcement.visibility ? '':'hidden'}>   {announcement.similar[2]}</div>
                <div className='announcementButton'>
                    <button onClick={()=>changeVisibilityOfElements(announcement.id)}>{announcement.visibility ? 'Hide' : 'Show more'}</button>
                    <button onClick={()=>editAnnouncement(announcement.id)}>Edit</button>
                    <button onClick={()=>deleteAnnouncement(announcement.id)}>Delete</button>
                </div>
            </li>
        </div>
    )
}