import { useState } from 'react';
import './Modal.css'

const Columns = ["Inquiry", "Booked", "Shoot Day", "Editing", "Delivered"];


function Modal() {

    const [isOpen, setIsOpen] = useState(false);

    const [cards, setCards] = useState([
        { id: 1, clientName: "Sarah & James", shootType: "Wedding", shootDate: "2026-06-14", notes: "Golden hour preferred.", status: "Booked" },
        { id: 2, clientName: "Emily Turner.", shootType: "Portrait", shootDate: "2026-03-05", notes: "Anytime", status: "Inquiry" },
        { id: 3, clientName: "Hassell Family", shootType: "Family", shootDate: "2026-02-20", notes: "Outdoor session.", status: "Editing" },
    ]);

    const [addIn, setAddIn] = useState(null);
    const [formData, setFormData] = useState({
        clientName: '',
        shootType: '',
        shootDate: '',
        notes: '',
    });

    function handleDelete(id) {
        setCards(cards.filter((card) => card.id !== id));
    }

    function handleFormChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleAddChange(col) {
        if (!formData.clientName.trim()) return;
        setCards(prev => [...prev, {
            id: Date.now(),
            clientName: formData.clientName,
            shootType: formData.shootType,
            shootDate: formData.shootDate,
            notes: formData.notes,
            status: col
        }]);
        setFormData({ clientName: '', shootType: '', shootDate: '', notes: '' });
        setAddIn(null);
    }

    return (
        <>
            <button
                className="pipeline-btn"
                onClick={() => setIsOpen(true)}
            >
                Schedule Clients
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

                                        {cards.filter((card) => card.status === col).map((card) => (
                                            <div className="kanban-card" key={card.id}>
                                                <p><strong>{card.clientName}</strong></p>
                                                <p>{card.shootType} — {card.shootDate}</p>
                                                <p>{card.notes}</p>
                                                <button onClick={() => handleDelete(card.id)}>Delete</button>
                                            </div>
                                        ))}
                                        {addIn === col && (
                                            <div className="add-card-form">
                                                <input
                                                    name="clientName"
                                                    placerholder="Client Name"
                                                    value={formData.clientName}
                                                    onChange={handleFormChange}
                                                />
                                                <input
                                                    name="shootType"
                                                    placeholder='Shoot Type'
                                                    value={formData.shootType}
                                                    onChange={handleFormChange}
                                                />
                                                <input
                                                    name="shootDate"
                                                    placeholder='Shoot Date'
                                                    value={formData.shootDate}
                                                    onChange={handleFormChange}
                                                />
                                                <input
                                                    name="notes"
                                                    placeholder="Notes"
                                                    value={formData.notes}
                                                    onChange={handleFormChange}
                                                />
                                                <button onClick={() => handleAddChange(col)}>Add</button>
                                                <button onClick={() => setAddIn(null)}>Cancel</button>
                                            </div>
                                        )}

                                        <button onClick={() => setAddIn(col)}>+ Add client</button>
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