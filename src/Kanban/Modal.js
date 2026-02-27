import { useState, useEffect } from 'react';
import './Modal.css'

const Columns = ["Inquiry", "Booked", "Shoot Day", "Editing", "Delivered"];

const initalCards = [
    { id: 1, clientName: "Sarah & James", shootType: "Wedding", shootDate: "2026-06-14", notes: "Golden hour preferred.", status: "Booked" },
    { id: 2, clientName: "Emily Turner.", shootType: "Portrait", shootDate: "2026-03-05", notes: "Anytime", status: "Inquiry" },
    { id: 3, clientName: "Hassell Family", shootType: "Family", shootDate: "2026-02-20", notes: "Outdoor session.", status: "Editing" },
];

function Modal() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="pipeline-btn"
                onClick={() => setIsOpen(true)}
            >
                Pipeline
            </button>

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>

                        <div className="modal-header">
                            <h2>Client Pipeline</h2>
                            <button className="modal-close" onClick={() => setIsOpen(false)}>×</button>
                        </div>

                        <div className="kanban-board">
                            {Columns.map((col) => {
                                return (
                                    <div className="kanban-column" key={col}>
                                        <h3>{col}</h3>

                                        {initalCards.filter((card) => card.status === col).map((card) => (
                                            <div className="kanban-card" key={card.id}>
                                                <p><strong>{card.clientName}</strong></p>
                                                <p>{card.shootType} — {card.shootDate}</p>
                                                <p>{card.notes}</p>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;