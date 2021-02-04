import React from 'react'

export default function Announcement({announcement, deleteAnnouncement, editAnnouncement}) {
    return (
        <li>
            <div>Title: {announcement.title}</div>
            <div>Description: </div>
            <div>{announcement.description}</div>
            <div>Date: {announcement.date}</div>
            <div>
                <button onClick={()=>editAnnouncement(announcement.id)}>Edit</button>
                <button onClick={()=>deleteAnnouncement(announcement.id)}>Delete</button>
            </div>
        </li>
    )
}